import AmazonButton from "./amazon-button";
import type { Product } from "@/lib/products";

export default function ComparisonTable({
  productA,
  productB,
}: {
  productA: Product;
  productB: Product;
}) {
  return (
    <div className="overflow-x-auto rounded-[2rem] border border-pink-100 bg-white shadow-[0_18px_50px_rgba(233,30,99,0.08)]">
      <table className="w-full min-w-[700px] border-collapse">
        <thead className="bg-gradient-to-r from-pink-50 to-rose-50">
          <tr>
            <th className="p-5 text-left text-sm font-black uppercase tracking-[0.14em] text-zinc-700">Product</th>
            <th className="p-5 text-left text-sm font-black uppercase tracking-[0.14em] text-zinc-700">Price</th>
            <th className="p-5 text-left text-sm font-black uppercase tracking-[0.14em] text-zinc-700">Rating</th>
            <th className="p-5 text-left text-sm font-black uppercase tracking-[0.14em] text-zinc-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {[productA, productB].map((product) => (
            <tr key={product.id} className="border-t border-pink-100">
              <td className="p-5">
                <div className="font-black text-zinc-950">{product.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{product.category.replace(/-/g, " ")}</div>
              </td>
              <td className="p-5 text-lg font-black text-pink-700">${product.price.toFixed(2)}</td>
              <td className="p-5 text-zinc-700">★ {product.rating}</td>
              <td className="p-5">
                <AmazonButton href={product.amazonUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}