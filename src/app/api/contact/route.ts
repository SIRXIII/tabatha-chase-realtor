export const runtime = "nodejs";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
  consent: boolean;
}

interface ValidationError {
  field: string;
  message: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const payload: ContactPayload = await request.json();

    // Validate required fields
    const errors: ValidationError[] = [];

    if (!payload.firstName || payload.firstName.trim() === "") {
      errors.push({ field: "firstName", message: "First name is required" });
    }

    if (!payload.lastName || payload.lastName.trim() === "") {
      errors.push({ field: "lastName", message: "Last name is required" });
    }

    if (!payload.email || payload.email.trim() === "") {
      errors.push({ field: "email", message: "Email is required" });
    } else if (!/^.+@.+\..+$/.test(payload.email)) {
      errors.push({ field: "email", message: "Invalid email format" });
    }

    if (!payload.interest || payload.interest.trim() === "") {
      errors.push({ field: "interest", message: "Interest is required" });
    }

    if (!payload.message || payload.message.trim() === "") {
      errors.push({ field: "message", message: "Message is required" });
    }

    if (payload.consent !== true) {
      errors.push({ field: "consent", message: "Consent must be true" });
    }

    // Return validation errors if any
    if (errors.length > 0) {
      return Response.json(
        { ok: false, errors },
        { status: 400 }
      );
    }

    // Log the payload (stub for real ESP wiring)
    console.log("Contact form submission:", payload);

    // Success response
    return Response.json(
      { ok: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { ok: false, errors: [{ field: "general", message: "Invalid request body" }] },
      { status: 400 }
    );
  }
}
