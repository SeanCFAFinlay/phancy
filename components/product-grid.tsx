import ProductCard from "./product-card";
import type { Product } from "@/lib/products";

export default function ProductGrid({
  products,
  showMargin = false,
}: {
  products: Product[];
  showMargin?: boolean;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showMargin={showMargin} />
      ))}
    </div>
  );
}