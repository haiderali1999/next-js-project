import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id) return NextResponse.json({ id, name: "product 1" });
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ ...body, id }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  debugger;
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  return NextResponse.json({});
}
