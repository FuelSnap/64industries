import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log to server console for now
    console.log("=== NEW AUDIT SUBMISSION ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("============================");

    // Send to webhook if configured
    const webhookUrl = process.env.AUDIT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Audit Submission:\n• Name: ${data.name}\n• Email: ${data.email}\n• Platform: ${data.platform}\n• Handle: ${data.handle}\n• Followers: ${data.followers}\n• Niche: ${data.niche}\n• Service: ${data.service}\n• Challenge: ${data.challenge || "N/A"}`,
          ...data,
        }),
      });
    }

    // Send email notification if configured
    const notifyEmail = process.env.AUDIT_NOTIFY_EMAIL;
    if (notifyEmail && process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "64 Industries <notifications@64industries.com>",
          to: notifyEmail,
          subject: `New Audit: ${data.name} (${data.handle})`,
          html: `
            <h2>New Creator Audit Submission</h2>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${data.name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Platform</td><td style="padding:8px;border:1px solid #ddd">${data.platform}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Handle</td><td style="padding:8px;border:1px solid #ddd">${data.handle}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Followers</td><td style="padding:8px;border:1px solid #ddd">${data.followers}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Niche</td><td style="padding:8px;border:1px solid #ddd">${data.niche}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${data.service}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Challenge</td><td style="padding:8px;border:1px solid #ddd">${data.challenge || "N/A"}</td></tr>
            </table>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Audit submission error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
