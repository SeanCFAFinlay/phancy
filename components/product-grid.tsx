import ProductCard from "./product-card";
import type { Product } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
  compact?: boolean;
};

export default function ProductGrid({ products, compact = false }: ProductGridProps) {
  return (
    <div className="phancy-collection-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </div>
  );
}
