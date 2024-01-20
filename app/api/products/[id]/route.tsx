import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client/client";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!product)
    return NextResponse.json({ error: "No product product" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const productExist = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!productExist)
    return NextResponse.json({ error: "No product found" }, { status: 404 });

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  debugger;
  const exist = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!exist)
    return NextResponse.json({ error: "Product not found" }, { status: 400 });

  await prisma.product.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json({});
}
