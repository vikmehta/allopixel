const items = [
  "Brand Identity", "Web Design", "Logo Design", "Social Media",
  "Print & Collateral", "Montréal", "Affordable", "Fast Turnaround",
  "No Hidden Fees", "Creative Direction",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-coral overflow-hidden py-3" aria-hidden>
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-2">
            <span className="font-mono text-[0.65rem] font-medium text-white uppercase tracking-[0.2em]">
              {item}
            </span>
            <span className="text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
