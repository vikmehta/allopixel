const items = [
  "Brand Identity", "Web Design", "Logo Design", "Social Media",
  "Print & Collateral", "Montréal", "No Hidden Fees", "Fast Turnaround",
  "Affordable", "Creative Direction",
];

export default function PreviewMarquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{
      background: "#D4FF3A",
      padding: "0.9rem 0",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        animation: "marquee 30s linear infinite",
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "1rem",
            marginRight: "1rem",
          }}>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.8rem",
              textTransform: "uppercase", letterSpacing: "0.15em",
              color: "#0A0A12",
            }}>{item}</span>
            <span style={{ color: "rgba(10,10,18,0.3)", fontSize: "1rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
