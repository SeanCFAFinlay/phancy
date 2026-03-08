import Link from "next/link";

export default function MobileNav(){

return(
<div className="fixed bottom-3 left-3 right-3 bg-white shadow-xl border border-pink-100 rounded-full p-2 flex justify-around md:hidden">

<Link href="/" className="text-xs font-bold">Home</Link>
<Link href="/category/vitamins" className="text-xs font-bold">Vitamins</Link>
<Link href="/trending" className="text-xs font-bold">Trending</Link>
<Link href="/deals" className="text-xs font-bold">Deals</Link>

</div>
)
}