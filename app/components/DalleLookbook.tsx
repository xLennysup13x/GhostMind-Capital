'use client';
export default function DalleLookbook() {
  const [prompt, setPrompt] = useState('');
  const [imgs, setImgs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch('/api/lookbook', { method: 'POST', body: JSON.stringify({ prompt }) }).then(r => r.json());
    setImgs(res.imgs);
    setLoading(false);
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">AI Lookbook (DALL·E 3)</h2>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. cyberpunk streetwear at night, neon Tokyo"
        className="mx-auto block w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded px-4 py-2"
      />
      <button onClick={generate} className="mt-4 mx-auto block bg-green-400 text-black px-6 py-2 rounded font-bold">
        {loading ? 'Generating...' : 'Generate Fits'}
      </button>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((url, i) => (
          <img key={i} src={url} className="rounded-xl" alt={`look-${i}`} />
        ))}
      </div>
    </section>
  );
}