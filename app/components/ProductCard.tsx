'use client';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);

  const handleAdd = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: product.id, size }),
    });
    const { url } = await res.json();
    window.location = url;
  };

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
      <img src={product.img} alt={product.name} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-green-400 font-semibold">${product.price}</p>
        <select
          className="mt-2 bg-zinc-800 text-white px-3 py-1 rounded"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          {product.sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className="mt-3 w-full bg-green-400 text-black py-2 rounded font-bold hover:bg-green-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}