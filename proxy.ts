import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// English keeps its original URLs (/about), served internally from app/[lang]/ as /en/about.
// French lives at /fr/... The unprefixed /en/... form is redirected so each page has one URL.
//
// First-visit language detection: a French-preferring browser opening the English homepage "/"
// is sent to /fr once (307). Skipped when the visitor already chose a language (the switcher sets
// a `lang` cookie) and for crawlers/link-preview bots, so indexing and previews stay on English.
const BOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|linkedin|twitter|slack|discord|preview|lighthouse|pagespeed/i;

/** True when the browser's most-preferred language (by q-value, then order) is French. */
function prefersFrench(header: string | null): boolean {
  if (!header) return false;
  let best = { tag: "", q: -1 };
  for (const part of header.split(",")) {
    const [tag, ...params] = part.trim().split(";");
    const qParam = params.map(p => p.trim()).find(p => p.startsWith("q="));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1;
    if (tag && tag !== "*" && q > best.q) best = { tag: tag.toLowerCase(), q };
  }
  return best.q > 0 && (best.tag === "fr" || best.tag.startsWith("fr-"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/fr" || pathname.startsWith("/fr/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();

  if (pathname === "/") {
    const chosen = request.cookies.has("lang");
    const isBot = BOT.test(request.headers.get("user-agent") ?? "");
    const vary = { headers: { Vary: "Accept-Language, Cookie" } };
    if (!chosen && !isBot && prefersFrench(request.headers.get("accept-language"))) {
      url.pathname = "/fr";
      const res = NextResponse.redirect(url, 307);
      res.headers.set("Vary", "Accept-Language, Cookie");
      return res;
    }
    url.pathname = "/en";
    return NextResponse.rewrite(url, vary);
  }

  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension (images, sitemap.xml, robots.txt…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
