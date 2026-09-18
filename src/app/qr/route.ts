import { NextResponse } from "next/server";

import { LINKS } from "@/lib/links";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.redirect(LINKS.qrDestination, 307);
}
