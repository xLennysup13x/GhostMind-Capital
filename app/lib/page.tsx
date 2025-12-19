import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import StylistChat from '@/components/StylistChat';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <section id="hero" className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold">Streetwear That Thinks</h1>
        <p className="text-xl mt-4 opacity-80">AI-curated drops. Zero bots. 100 % heat.</p>
        <a href="#shop" className="inline-block mt-6 bg-green-400 text-black px-6 py-3 rounded font-bold">Shop Now</a>
      </section>

      <section id="drop" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Next AI-Predicted Drop</h2>
        <div id="countdown" className="text-3xl mt-4 font-mono"></div>
      </section>

      <section id="lookbook" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">AI Lookbook</h2>
        <input
          id="lookInput"
          placeholder="Describe your vibe (e.g. dark techwear)"
          className="mt-4 mx-auto block w-full max-w-md bg-zinc-900 border border-zinc-700 rounded px-4 py-2"
        />
        <button
          onclick="generateLook()"
          className="mt-4 mx-auto block bg-green-400 text-black px-4 py-2 rounded font-bold"
        >
          Generate Fit
        </button>
        <div id="lookGallery" className="mt-6 flex flex-wrap gap-4 justify-center"></div>
      </section>

      <section id="shop" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Shop Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <StylistChat />
    </main>
  );
}