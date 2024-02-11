import { NextResponse } from "next/server";
import { Product } from "@/data/product";
export async function GET(request: Request, p: { params: { id: string } }) {
  const id = +p.params.id;
  const data = Product.find((i) => i.id === id);
  return NextResponse.json({ data: data }, { status: 200 });
}
