import { Resend } from 'resend';
import WaitlistEmail from '@/emails/WaitlistEmail';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();
  await resend.emails.send({
    from: 'drops@ghostmind.dev',
    to: email,
    subject: 'Ghostmind Drop – You’re in!',
    react: WaitlistEmail(),
  });
  return Response.json({ ok: true });
}