import { NextResponse } from "next/server";
import { Product } from "@/data/product";
export async function GET(request: Request) {
  return NextResponse.json({ data: Product.slice(0, 8) }, { status: 200 });
}
