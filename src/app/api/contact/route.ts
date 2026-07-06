import { NextResponse } from "next/server";

/**
 * Contact form API placeholder.
 * Connect to Prisma ContactSubmission model when DATABASE_URL is configured.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Save to database via Prisma
    // await prisma.contactSubmission.create({ data: { name, email, company, interest, message } })

    console.log("[Contact Submission]", { name, email, company, interest, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
