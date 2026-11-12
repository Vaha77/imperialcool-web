const API = "https://buyukkaravan.com/api/products";
const BRAND = "BRILIANT";
// Fixed seed keeps page order (and the 600s cache keys) stable across requests.
const SEED = "imperialcool";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  categoryName: string;
  priceUsd: string | null;
  image: string | null;
  specs: string[];
  availability: string;
};

export type CatalogPage = {
  products: Product[];
  error?: boolean;
};

async function fetchPage(cursor?: string): Promise<{ products: Product[]; total: number }> {
  const url = new URL(API);
  url.searchParams.set("category", "all");
  url.searchParams.set("seed", SEED);
  if (cursor) url.searchParams.set("cursor", cursor);
  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

// The backend has no brand filter, so walk the whole catalog server-side and keep only BRILIANT.
async function getBrandProducts(): Promise<Product[]> {
  const first = await fetchPage();
  const size = first.products.length || 1;
  // shortcut: relies on the API cursor being a plain offset; switch to sequential nextCursor walking if that changes.
  const rest = await Promise.all(
    Array.from({ length: Math.ceil(first.total / size) - 1 }, (_, i) => fetchPage(String((i + 1) * size))),
  );
  return [first, ...rest].flatMap((page) => page.products).filter((p) => p.brand.toUpperCase() === BRAND);
}

export async function getCatalog(params: { category: string; q: string }): Promise<CatalogPage & { categories: [string, string][] }> {
  let all: Product[];
  try {
    all = await getBrandProducts();
  } catch {
    return { products: [], categories: [], error: true };
  }
  const q = params.q.toLowerCase();
  const products = all.filter(
    (p) =>
      (params.category === "all" || p.category === params.category) &&
      (!q || [p.name, p.model, ...p.specs].some((s) => s.toLowerCase().includes(q))),
  );
  const categories = Array.from(new Map(all.map((p) => [p.category, p.categoryName]))).sort((a, b) => a[1].localeCompare(b[1]));
  return { products, categories };
}
