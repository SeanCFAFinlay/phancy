import React from "react";
import { Product } from "@/lib/manifest";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-phancy-lg p-6 shadow-phancy hover:shadow-xl transition-all duration-300 ease-in-out border border-transparent hover:border-phancy-forest/10">
      <div className="aspect-[4/5] bg-phancy-cream rounded-[24px] mb-8 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
           {/* Placeholder for high-end lifestyle imagery */}
           <span className="font-editorial italic text-phancy-black/20 text-4xl">{product.imageCategory}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-display text-xl uppercase tracking-wider text-phancy-black">{product.title}</h3>
          <span className="font-display font-bold text-phancy-forest">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="font-editorial text-phancy-black/70 leading-relaxed italic">
          &ldquo;{product.editorNote}&rdquo;
        </p>
        
        <a 
          href={product.affiliateLink}
          className="inline-block w-full py-4 text-center font-display uppercase tracking-[0.2em] text-sm text-white bg-phancy-forest hover:bg-phancy-forestDark rounded-xl transition-all duration-300 ease-in-out"
        >
          Explore the Selection
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
