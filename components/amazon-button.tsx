import Link from "next/link";

export default function AmazonButton({
  href,
  children = "View on Amazon.ca",
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02] hover:from-pink-700 hover:to-fuchsia-700"
    >
      {children}
    </Link>
  );
}