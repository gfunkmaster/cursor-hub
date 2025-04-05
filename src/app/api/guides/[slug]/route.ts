import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "config", `${params.slug}.md`);
    const content = await fs.readFile(filePath, "utf8");
    return new NextResponse(content);
  } catch (error) {
    return new NextResponse("Guide not found", { status: 404 });
  }
}
