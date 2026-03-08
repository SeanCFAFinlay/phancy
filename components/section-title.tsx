export default function SectionTitle({
  title,
  subtitle,
  kicker,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
}) {
  return (
    <div className="mb-7 max-w-2xl">
      {kicker ? (
        <div className="mb-3 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-pink-700">
          {kicker}
        </div>
      ) : null}
      <h2 className="phancy-text-balance text-3xl font-black tracking-tight text-zinc-950 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base leading-7 text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}