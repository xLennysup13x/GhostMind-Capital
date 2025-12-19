'use client';
export default function AdminUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(89);
  const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);

  const upload = async () => {
    if (!file || !name) return alert('Missing fields');
    const presign = await fetch('/api/upload', { method: 'POST', body: JSON.stringify({ name }) }).then(r => r.json());
    await fetch(presign.url, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } });
    const img = presign.url.split('?')[0];
    await fetch('/api/products', { method: 'POST', body: JSON.stringify({ name, price, img, sizes }) });
    alert('Drop added ✅');
  };

  return (
    <div className="space-y-4 max-w-xl">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-800 px-4 py-2 rounded" />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full bg-zinc-800 px-4 py-2 rounded" />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full" />
      <button onClick={upload} className="bg-green-400 text-black px-6 py-2 rounded font-bold">Upload Drop</button>
    </div>
  );
}