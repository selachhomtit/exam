import { NextRequest, NextResponse } from "next/server";
import { getProductById, deleteProduct } from "@/lib/data/products";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const success = deleteProduct(id);
  if (!success) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
