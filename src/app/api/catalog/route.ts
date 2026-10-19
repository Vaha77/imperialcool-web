import { NextRequest, NextResponse } from "next/server";

import { getCatalog } from "@/lib/catalog";

export async function GET(req: NextRequest) {
  const p = req.nextUrl.searchParams;
  const page = await getCatalog({
    category: p.get("category") ?? undefined,
    q: p.get("q") ?? undefined,
    cursor: p.get("cursor") ?? undefined,
    seed: p.get("seed") ?? undefined,
  });
  return NextResponse.json(page, { status: page.error ? 502 : 200 });
}
