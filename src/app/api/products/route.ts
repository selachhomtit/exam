import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, createProduct } from "@/lib/data/products";

// This route handler is the BFF layer: the browser only ever talks to
// same-origin "/api/products". A real backend URL / API key would live in
// an environment variable and be called from here, never exposed to the client.
// e.g. const res = await fetch(`${process.env.BACKEND_URL}/products`, { headers: { Authorization: ... } })

export async function GET() {
  const products = getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.category) {
    return NextResponse.json({ message: "name and category are required" }, { status: 400 });
  }

  const product = createProduct({
    name: body.name,
    category: body.category,
    price: Number(body.price) || 0,
    stock: Number(body.stock) || 0,
    image: body.image || undefined,
    description: body.description || "",
  });

  return NextResponse.json(product, { status: 201 });
}
