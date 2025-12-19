import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const full = `Streetwear fashion lookbook, ${prompt}, high-resolution, Vogue style`;
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: full,
    n: 3,
    size: '1024x1024',
  });
  const imgs = response.data.map(d => d.url) as string[];
  return Response.json({ imgs });
}