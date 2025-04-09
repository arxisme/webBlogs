// src/routes/contact/+server.ts
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
  const { name, email, message } = await request.json();

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with a verified sender
      to: 'arsh11100arsh@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    console.log('Email sent response:', response);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error('Email send failed', e);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
};
