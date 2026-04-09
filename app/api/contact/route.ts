import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  service?: string;
  message?: string;
}

function sanitizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  // Allows international and local formats while requiring at least 7 digits.
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const data = {
    name: sanitizeText(payload.name),
    phone: sanitizeText(payload.phone),
    email: sanitizeText(payload.email),
    location: sanitizeText(payload.location),
    service: sanitizeText(payload.service),
    message: sanitizeText(payload.message),
  };

  const errors: Record<string, string> = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message || data.message.length < 12) {
    errors.message = "Please provide project details (minimum 12 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors: errors },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const notification = {
    source: "website-contact-form",
    submittedAt: new Date().toISOString(),
    ...data,
  };

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notification),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "We could not forward your request right now. Please call or WhatsApp us directly.",
          },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your request right now. Please call or WhatsApp us directly.",
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thanks for reaching out. Our team will contact you within 24 hours.",
    deliveryMode: webhookUrl ? "webhook" : "local-validation-only",
  });
}
