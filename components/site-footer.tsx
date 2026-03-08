import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-pink-100 bg-white/80">
      <div className="phancy-container grid gap-10 py-12 md:grid-cols-[1.25fr,1fr,1fr]">
        <div>
          <div className="text-2xl font-black text-pink-600">Phancy</div>
          <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600">
            Modern Canadian wellness discovery for probiotics, vitamins, beauty support, and everyday health products.
          </p>
        </div>

        <div>
          <div className="text-sm font-black uppercase tracking-[0.16em] text-zinc-800">Explore</div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600">
            <Link href="/category/womens-health">Women&apos;s Health</Link>
            <Link href="/category/vitamins">Vitamins</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/deals">Deals</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-black uppercase tracking-[0.16em] text-zinc-800">Disclosure</div>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            As an Amazon Associate, Phancy may earn from qualifying purchases.
            Wellness information is general in nature and not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}