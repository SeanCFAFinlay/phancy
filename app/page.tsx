import ProductCard from "@/components/product-card";
import {getFeaturedProducts} from "@/lib/products";

export default function HomePage(){

const products=getFeaturedProducts();

return(

<main>

<section className="container section">

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl text-white p-10 shadow-xl">

<div className="uppercase text-xs tracking-widest mb-3">
 curated wellness
</div>

<h1 className="text-5xl font-black leading-tight mb-4">
 Wellness picks for modern living
</h1>

<p className="opacity-90 mb-6">
 Discover supplements, probiotics, collagen and brain health
 products curated for Canadian shoppers.
</p>

<a href="/deals" className="btn bg-white text-pink-600">
 Explore Deals
</a>

</div>

<div className="card p-8">

<h2 className="text-3xl font-black mb-3">
 Why Phancy
</h2>

<p className="text-zinc-600 leading-7">
 Phancy curates modern wellness products with cleaner
 design, easier discovery, and trusted product reviews.
</p>

</div>

</div>

</section>


<section className="container section">

<h2 className="text-4xl font-black mb-8">
 Featured Wellness Picks
</h2>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

{products.map((p:any)=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</section>

</main>
)
}