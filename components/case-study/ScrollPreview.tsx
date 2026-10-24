"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Screen } from "@/lib/projects";

// The viewport is 16:10, so its height is this fraction of its width.
const FRAME_RATIO = 10 / 16;

const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Props = {
  screen: Screen;
  /** Shown in the browser bar. */
  domain?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * A full-page capture seen through a fixed window. Hover (mouse) or tap / Enter (touch, keyboard)
 * glides the page up through the window; releasing eases it back to the top.
 * With reduced motion the window scrolls natively instead of animating.
 */
export default function ScrollPreview({ screen, domain = "harmoniatherapycenter.ca", priority = false, sizes = "(max-width: 1024px) 100vw, 1200px" }: Props) {
  const { tr, lang } = useLanguage();
  const cs = tr.caseStudy;
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const [hovering, setHovering] = useState(false);
  const [toggled, setToggled] = useState(false);
  const lastPointer = useRef<string | null>(null);

  const pageRatio = screen.height / screen.width;
  const travel = Math.max(0, 1 - FRAME_RATIO / pageRatio) * 100; // % of the image's own height
  const seconds = Math.min(36, Math.max(6, (pageRatio - FRAME_RATIO) * 5));
  const active = hovering || toggled;
  const scrollable = travel > 0;

  return (
    <div className="border border-black/10 bg-white shadow-[0_30px_60px_-30px_rgba(9,39,36,0.35)] rounded-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 h-9 bg-[#F3F2EE] border-b border-black/10" aria-hidden>
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        <span className="mx-auto font-mono text-[0.7rem] tracking-[0.06em] text-ink/45 bg-white/80 px-6 py-0.5 rounded-full">{domain}</span>
        <span className="w-[42px]" />
      </div>

      <button
        type="button"
        aria-pressed={toggled}
        aria-label={`${cs.exploreLabel}: ${screen.alt[lang]}`}
        disabled={!scrollable}
        onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
        onPointerEnter={(e) => { if (e.pointerType === "mouse") setHovering(true); }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovering(false); }}
        onClick={() => { if (lastPointer.current !== "mouse") setToggled(t => !t); lastPointer.current = null; }}
        className={`group relative block w-full aspect-[16/10] bg-[#F3F2EE] text-left ${reduced ? "overflow-y-auto" : "overflow-hidden"} ${scrollable ? "cursor-pointer" : "cursor-default"}`}
      >
        <span
          className="block will-change-transform"
          style={reduced ? undefined : {
            transform: `translateY(-${active ? travel : 0}%)`,
            transitionProperty: "transform",
            transitionDuration: active ? `${seconds}s` : "1.4s",
            transitionTimingFunction: active ? "cubic-bezier(0.45, 0.05, 0.35, 1)" : "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Image src={screen.src} alt={screen.alt[lang]} width={screen.width} height={screen.height}
            priority={priority} sizes={sizes} draggable={false} className="block w-full h-auto select-none" />
        </span>

        {scrollable && !reduced && (
          <span aria-hidden
            className={`pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 text-chalk font-mono text-[0.7rem] uppercase tracking-[0.14em] px-4 py-2 backdrop-blur transition-opacity duration-500 ${active ? "opacity-0" : "opacity-100"}`}>
            <span className="hidden pointer-fine:inline">{cs.hintHover}</span>
            <span className="hidden pointer-coarse:inline">{cs.hintTap}</span>
          </span>
        )}
      </button>
    </div>
  );
}
