const API = "https://buyukkaravan.com/api/products";

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
  total: number;
  nextCursor: string | null;
  seed: string;
  error?: boolean;
};

export async function getCatalog(params: { category?: string; q?: string; cursor?: string; seed?: string }): Promise<CatalogPage> {
  const url = new URL(API);
  url.searchParams.set("category", params.category || "all");
  for (const key of ["q", "cursor", "seed"] as const) if (params[key]) url.searchParams.set(key, params[key]!);
  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } catch {
    return { products: [], total: 0, nextCursor: null, seed: "", error: true };
  }
}

// Fixed seed keeps page order (and the 600s cache keys) stable across requests.
const SEED = "imperialcool";

export async function getCategories(): Promise<[slug: string, name: string][]> {
  const first = await getCatalog({ seed: SEED });
  const size = first.products.length || 1;
  // shortcut: relies on the API cursor being a plain offset; switch to sequential nextCursor walking if that changes.
  const rest = await Promise.all(
    Array.from({ length: Math.ceil(first.total / size) - 1 }, (_, i) => getCatalog({ seed: SEED, cursor: String((i + 1) * size) })),
  );
  const map = new Map<string, string>();
  for (const p of [first, ...rest].flatMap((page) => page.products)) map.set(p.category, p.categoryName);
  return Array.from(map).sort((a, b) => a[1].localeCompare(b[1]));
}
