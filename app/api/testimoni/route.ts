import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const testimoni = await prisma.testimoni.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(testimoni);
}

export async function POST(request: Request) {
  const { username, rating, comment } = await request.json();
  await prisma.testimoni.create({
    data: {
      username,
      rating,
      comment,
    },
  });

  return NextResponse.json(
    { message: "Testimoni Berhasil Ditambahkan" },
    { status: 201 },
  );
}
