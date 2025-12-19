'use client';
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const join = async () => {
    await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) });
    alert('Check your inbox 📬');
  };
  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the Drop Waitlist</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 w-full max-w-sm"
      />
      <button onClick={join} className="ml-2 bg-green-400 text-black px-4 py-2 rounded font-bold">Join</button>
    </div>
  );
}