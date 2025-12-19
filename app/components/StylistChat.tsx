'use client';
import { useState } from 'react';

export default function StylistChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState<{role:string;text:string}[]>([]);

  const send = async () => {
    if (!input.trim()) return;
    setMsgs((m) => [...m, { role: 'user', text: input }]);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const { reply } = await res.json();
    setMsgs((m) => [...m, { role: 'ai', text: reply }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 bg-zinc-800 text-white px-4 py-3 rounded-full shadow-xl"
      >
        💬 Stylist
      </button>
      {open && (
        <div className="fixed bottom-24 left-6 w-80 bg-zinc-900 rounded-xl shadow-2xl flex flex-col">
          <header className="bg-green-400 text-black px-4 py-2 rounded-t-xl font-bold">AI Stylist</header>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto h-64 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right text-green-300' : 'text-white'}>
                {m.text}
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && send()}
            placeholder="Ask how to style your hoodie..."
            className="bg-zinc-800 text-white px-3 py-2 rounded-b-xl border-none"
          />
        </div>
      )}
    </>
  );
}