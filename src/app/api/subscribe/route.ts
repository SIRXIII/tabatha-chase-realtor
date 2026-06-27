export const runtime = "nodejs";

interface SubscribeRequest {
  email: string;
  consent: boolean;
}

interface SubscribeResponse {
  success: boolean;
  message: string;
  email?: string;
  timestamp?: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as SubscribeRequest;

    const { email, consent } = body;

    // Validate email format
    const emailRegex = /^.+@.+\..+$/;
    if (!email || !emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Invalid email address",
        } as SubscribeResponse,
        { status: 400 }
      );
    }

    // Validate consent
    if (consent !== true) {
      return Response.json(
        {
          success: false,
          message: "Consent must be true to subscribe",
        } as SubscribeResponse,
        { status: 400 }
      );
    }

    // Log successful subscription
    console.log(`[SUBSCRIBE] Email: ${email}, Consent: ${consent}, Timestamp: ${new Date().toISOString()}`);

    // Return success response with same shape as contact API
    return Response.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
        email,
        timestamp: new Date().toISOString(),
      } as SubscribeResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error("[SUBSCRIBE_ERROR]", error);

    return Response.json(
      {
        success: false,
        message: "Failed to process subscription",
      } as SubscribeResponse,
      { status: 500 }
    );
  }
}
