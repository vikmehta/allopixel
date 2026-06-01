import PreviewHero from "@/components/preview/PreviewHero";
import PreviewMarquee from "@/components/preview/PreviewMarquee";
import PreviewWork from "@/components/preview/PreviewWork";
import PreviewPricing from "@/components/preview/PreviewPricing";

export default function PreviewPage() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #FF4D2E; color: #fff; }
      `}</style>
      <PreviewHero />
      <PreviewMarquee />
      <PreviewWork />
      <PreviewPricing />
    </>
  );
}
