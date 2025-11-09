import { NextRequest, NextResponse } from "next/server";
import { v0 } from "v0-sdk";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.V0_API_KEY) {
      return NextResponse.json(
        {
          error:
            "V0_API_KEY is not configured. Please add it to your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Create chat using v0 SDK
    const chat = await v0.chats.create({ message });

    return NextResponse.json(chat);
  } catch (error) {
    console.error("Error calling v0 API:", error);
    return NextResponse.json(
      {
        error: "Failed to create chat",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
