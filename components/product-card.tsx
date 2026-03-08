import Link from "next/link";

export default function ProductCard({product}:any){

return(
<div className="card p-5">

<Link href={"/product/"+product.slug}>
 <div className="rounded-2xl bg-pink-50 p-5 mb-4">
  <img src={product.image} className="h-56 w-full object-contain"/>
 </div>
</Link>

<div className="text-xs font-bold uppercase text-pink-600 mb-1">
 {product.category}
</div>

<h3 className="text-xl font-black mb-2">
 {product.name}
</h3>

<div className="text-sm text-zinc-600 mb-2">
 ★ {product.rating} • {product.reviewCount} reviews
</div>

<div className="text-2xl font-black text-pink-600 mb-3">
 ${product.price}
</div>

<div className="flex gap-2 flex-wrap">

<Link href={"/product/"+product.slug} className="btn btn-outline">
 Read Review
</Link>

<a href={product.amazonUrl} target="_blank" className="btn btn-primary">
 View on Amazon
</a>

</div>

</div>
)
}