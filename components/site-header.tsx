import Link from "next/link";

export default function SiteHeader(){

return(
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-pink-100">
 <div className="container flex items-center justify-between h-20">

 <Link href="/" className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black">
   P
  </div>

  <div>
   <div className="text-2xl font-black text-pink-600">Phancy</div>
   <div className="text-xs uppercase tracking-widest text-zinc-500">
    Modern Wellness
   </div>
  </div>
 </Link>

 <nav className="hidden md:flex gap-8 text-sm font-semibold text-zinc-700">
  <Link href="/category/womens-health">Women's Health</Link>
  <Link href="/category/vitamins">Vitamins</Link>
  <Link href="/category/brain-health">Brain Health</Link>
  <Link href="/trending">Trending</Link>
  <Link href="/deals">Deals</Link>
 </nav>

 <Link href="/deals" className="btn btn-primary hidden md:inline-flex">
  Shop Deals
 </Link>

 </div>
</header>
)
}