import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// English keeps its original URLs (/about), served internally from app/[lang]/ as /en/about.
// French lives at /fr/... The unprefixed /en/... form is redirected so each page has one URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/fr" || pathname.startsWith("/fr/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension (images, sitemap.xml, robots.txt…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
