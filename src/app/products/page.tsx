import { getCatalog } from "@/lib/catalog";
import { ProductCatalog } from "@/components/sections/ProductCatalog";

export default async function ProductsPage({ searchParams }: { searchParams: { category?: string; q?: string } }) {
  const category = searchParams.category || "all";
  const q = searchParams.q?.trim() || "";
  const { categories, ...initial } = await getCatalog({ category, q });

  return <ProductCatalog initial={initial} categories={categories} category={category} q={q} />;
}
