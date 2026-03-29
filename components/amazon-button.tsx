import Link from "next/link";

type AmazonButtonProps = {
  href: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "soft";
};

export default function AmazonButton({
  href,
  children = "Discover on Amazon",
  variant = "primary",
}: AmazonButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-[var(--font-display)] text-sm font-semibold rounded-[var(--radius-md)] px-6 py-3.5 transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-[var(--forest)] text-white hover:bg-[var(--forest-dark)] hover:-translate-y-0.5",
    secondary:
      "border border-[var(--line)] bg-transparent text-[var(--off-black)] hover:bg-[var(--cream-dark)] hover:border-[var(--sage)]",
    soft: "bg-[var(--forest-light)] text-[var(--forest)] hover:bg-[var(--sage-light)]",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
}
