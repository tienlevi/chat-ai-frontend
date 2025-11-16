import { NextRequest, NextResponse } from "next/server";
import { v0 } from "v0-sdk";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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

    if (!id) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    const project = await v0.projects.getById({ projectId: id });

    return NextResponse.json(project);
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
