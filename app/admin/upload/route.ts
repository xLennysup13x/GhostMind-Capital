import { v4 as uuid } from 'uuid';
export async function POST() {
  const key = `drops/${uuid()}.jpg`;
  const url = `https://storage.googleapis.com/ghostmind-storage/${key}?uploadToken=${process.env.GCS_TOKEN}`;
  return Response.json({ url });
}