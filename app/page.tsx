import React from "react";
import { ProductManifest } from "@/lib/manifest";
import ProductCard from "@/components/ProductCard";

export default function PhancyLandingPage() {
  const nutrition = ProductManifest.filter(p => p.category === "The Morning Ritual");
  const homeWares = ProductManifest.filter(p => p.category === "The Modern Home");

  return (
    <main className="min-h-screen">
      {/* Sticky Frosted Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-phancy-cream/80 backdrop-blur-md border-b border-phancy-black/5">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-[0.4em] text-phancy-black">
            PHANCY
          </div>
          <nav className="hidden md:flex gap-12 font-display uppercase tracking-[0.2em] text-[10px] font-bold">
            <a href="#rituals" className="hover:text-phancy-forest transition-colors">Rituals</a>
            <a href="#home" className="hover:text-phancy-forest transition-colors">The Home</a>
            <a href="#manifesto" className="hover:text-phancy-forest transition-colors">Manifesto</a>
          </nav>
          <div className="h-2 w-2 rounded-full bg-phancy-forest animate-pulse" />
        </div>
      </header>

      {/* Asymmetrical Hero Section */}
      <section className="pt-40 pb-20 px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 space-y-12">
            <div className="inline-block py-2 px-4 bg-phancy-forest/5 rounded-full">
               <span className="font-display uppercase tracking-[0.3em] text-[10px] text-phancy-forest font-bold">EST. 2024 — Curated Wellness</span>
            </div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight uppercase">
              Wellness<br />
              <span className="text-phancy-forest italic font-editorial lowercase tracking-normal font-normal">Elevated.</span>
            </h1>
            <p className="font-editorial text-2xl md:text-3xl max-w-lg leading-relaxed text-phancy-black/80 italic">
              A considered bridge between nutrition and environment. For the modern Canadian entrepreneur.
            </p>
            <div className="flex gap-8">
              <a href="#rituals" className="group flex items-center gap-4 font-display uppercase tracking-[0.2em] text-xs font-bold text-phancy-black">
                Explore the Selection
                <span className="w-12 h-[1px] bg-phancy-black group-hover:w-16 group-hover:bg-phancy-forest transition-all" />
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 h-[70vh] bg-phancy-forest/5 rounded-phancy-lg overflow-hidden relative shadow-phancy">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center space-y-4">
                  <div className="w-32 h-[1px] bg-phancy-forest mx-auto" />
                  <span className="font-editorial italic text-phancy-black/20 text-6xl">Visual Ritual</span>
                  <div className="w-32 h-[1px] bg-phancy-forest mx-auto" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ritual Grid (In-Situ Pairings) */}
      <section id="rituals" className="py-40 px-8 md:px-16 max-w-[1440px] mx-auto space-y-32">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <h2 className="font-display text-4xl uppercase tracking-[0.2em]">The Ritual Grid</h2>
          <div className="h-[1px] w-20 bg-phancy-forest mx-auto" />
          <p className="font-editorial text-xl text-phancy-black/60 italic leading-relaxed">
            Everyday objects should be intentional. We pair high-density nutrition with architectural home wares to manifest an environment of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Pair: Morning Focus */}
          <ProductCard product={nutrition[0]} />
          <ProductCard product={homeWares[0]} />
          <ProductCard product={nutrition[2]} />
          <ProductCard product={homeWares[1]} />
        </div>

        {/* Asymmetrical "Split" Feature */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-12 lg:col-span-8 bg-phancy-black rounded-phancy-lg p-16 flex flex-col justify-between text-phancy-cream space-y-12">
             <div className="space-y-6">
               <span className="font-display uppercase tracking-[0.3em] text-[10px] text-phancy-forest font-bold">Editor's Note</span>
               <h3 className="font-display text-5xl uppercase leading-none tracking-tight">The Biohacking<br />Environment.</h3>
             </div>
             <p className="font-editorial text-3xl italic text-phancy-cream/60 leading-relaxed max-w-2xl">
               &ldquo;We do not merely supplement our diet; we curate our biology. The vessel for your tea is as vital as the leaves themselves.&rdquo;
             </p>
             <div className="flex justify-end">
               <span className="font-display uppercase tracking-[0.2em] text-xs opacity-40">Phancy Editorial 01</span>
             </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
             <ProductCard product={nutrition[3]} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Second Row: Integrative Living */}
          <ProductCard product={homeWares[2]} />
          <ProductCard product={nutrition[6]} />
          <ProductCard product={homeWares[3]} />
          <ProductCard product={nutrition[1]} />
        </div>
      </section>

      {/* The Modern Home Focus */}
      <section id="home" className="py-40 bg-phancy-black text-phancy-cream">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-12 gap-16 items-center">
           <div className="col-span-12 lg:col-span-7 h-[80vh] bg-phancy-cream/5 rounded-phancy-lg relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="font-editorial italic text-white text-[20vw]">Space</span>
             </div>
           </div>
           <div className="col-span-12 lg:col-span-5 space-y-12">
              <h2 className="font-display text-6xl uppercase tracking-tight leading-none">The Modern<br /><span className="text-phancy-forest">Sanctuary.</span></h2>
              <p className="font-editorial text-2xl italic leading-relaxed opacity-60">
                Wares for the Canadian workspace. Mid-century modernism meets the ritual of the morning ritual.
              </p>
              <div className="space-y-4">
                 <div className="h-[1px] w-full bg-phancy-cream/10" />
                 <div className="flex justify-between font-display uppercase tracking-widest text-[10px]">
                    <span>Wares & Decor</span>
                    <span>01 — 10</span>
                 </div>
              </div>
              <a href="#rituals" className="phancy-btn inline-block px-12 py-6 bg-phancy-forest hover:bg-phancy-forestDark text-white font-display uppercase tracking-[0.2em] text-xs transition-all duration-300 rounded-xl">
                 View the Detail
              </a>
           </div>
        </div>
      </section>

      {/* Final Manifest Section */}
      <section id="manifesto" className="py-60 px-8 md:px-16 max-w-[1440px] mx-auto text-center space-y-16">
         <h2 className="font-display text-8xl md:text-9xl uppercase tracking-tighter opacity-10 select-none">MANIFESTO</h2>
         <div className="max-w-4xl mx-auto">
            <p className="font-editorial text-4xl md:text-6xl italic leading-tight text-phancy-black/90">
              We believe everyday objects should be intentional. Phancy is the intersection of <span className="text-phancy-forest">performance</span> and <span className="text-phancy-forest">peace</span>.
            </p>
         </div>
         <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-display uppercase tracking-[0.2em] text-[10px] font-bold">
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-phancy-black/20" />
               <span>Biohacking Aesthetics</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-phancy-black/20" />
               <span>Editorial Utility</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-phancy-black/20" />
               <span>Curated Living</span>
            </div>
         </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-20 px-8 md:px-16 bg-white border-t border-phancy-black/5">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-display font-bold text-xl tracking-[0.4em] text-phancy-black">
            PHANCY
          </div>
          <div className="flex gap-12 font-display uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">
            <a href="#" className="hover:text-phancy-forest">Privacy</a>
            <a href="#" className="hover:text-phancy-forest">Terms</a>
            <a href="#" className="hover:text-phancy-forest">Disclosure</a>
          </div>
          <div className="font-editorial italic text-xs opacity-30">
            &copy; 2024 Phancy Canada. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
