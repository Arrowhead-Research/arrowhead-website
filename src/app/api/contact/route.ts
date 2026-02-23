import { NextResponse } from "next/server";

import { Resend } from "resend";

// TODO: Set RESEND_API_KEY in your Vercel environment variables
// Sign up at https://resend.com and create an API key
// Then add it to Vercel: vercel env add RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

interface ContactRequestBody {
  name: string;
  affiliation: string;
  email: string;
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ContactRequestBody;

    // Server-side validation
    if (!body.name || !body.affiliation || !body.email || !body.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const validAffiliations = [
      "active",
      "guard-reserve",
      "veteran",
      "non-military",
    ];
    if (!validAffiliations.includes(body.affiliation)) {
      return NextResponse.json(
        { error: "Please select a valid military affiliation." },
        { status: 400 },
      );
    }

    // TODO: Once RESEND_API_KEY is configured, this will send real emails.
    // You also need to verify the sending domain at https://resend.com/domains
    // For development, Resend allows sending to the account owner's email.
    await resend.emails.send({
      from: "Arrowhead Website <noreply@arrowheadresearch.org>",
      to: "info@arrowheadresearch.org",
      replyTo: body.email,
      subject: `Contact Form: ${body.name} (${body.affiliation})`,
      text: [
        `Name: ${body.name}`,
        `Affiliation: ${body.affiliation}`,
        `Email: ${body.email}`,
        ``,
        `Message:`,
        body.message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
