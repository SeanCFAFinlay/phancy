type SectionTitleProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  kicker,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {kicker && <div className="phancy-eyebrow mb-4">{kicker}</div>}
      <h2 className="phancy-h2">{title}</h2>
      {subtitle && <p className="phancy-body mt-4">{subtitle}</p>}
    </div>
  );
}
