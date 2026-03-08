type Props = {
  title: string;
  bullets?: string[];
  ctaText?: string;
  href?: string;
  tag?: string;
};

export default function ProductCard({
  title,
  bullets = [],
  ctaText = "View on Amazon",
  href = "#",
  tag = "Top Pick",
}: Props) {
  return (
    <div className="card p22" style={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "100%",
      transition: "all .3s ease"
    }}>
      {/* Header with tag */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12
        }}>
          <h3 className="h3" style={{ flex: 1 }}>{title}</h3>
          <span className="badge" style={{ 
            padding: "6px 12px", 
            fontSize: 11,
            flexShrink: 0,
            background: tag === "Top Pick" ? "linear-gradient(135deg,#fef08a,#fde047)" : 
                       tag === "Best" ? "linear-gradient(135deg,#fee2e2,#fecaca)" :
                       "linear-gradient(135deg,#e0e7ff,#c7d2fe)",
            border: "none",
            fontWeight: 800,
            color: tag === "Top Pick" ? "#78350f" : 
                   tag === "Best" ? "#7f1d1d" : "#3730a3"
          }}>
            {tag}
          </span>
        </div>
      </div>

      {/* Bullets */}
      <ul style={{ 
        margin: "0 0 18px 0", 
        paddingLeft: 20, 
        opacity: 0.85,
        flex: 1
      }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ 
            marginBottom: 8,
            lineHeight: 1.6,
            fontSize: 14,
            color: "var(--text)"
          }}>
            {b}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a href={href} rel="nofollow sponsored" className="btn btnPrimary" style={{
        width: "100%",
        justifyContent: "center",
        padding: "12px 16px",
        fontSize: 14,
        fontWeight: 700
      }}>
        {ctaText}
      </a>
      
      <div style={{ 
        fontSize: 12, 
        color: "var(--muted)",
        marginTop: 12,
        textAlign: "center"
      }}>
        Affiliate link (placeholder)
      </div>
    </div>
  );
}
