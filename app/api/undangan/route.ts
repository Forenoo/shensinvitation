import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const undangan = await prisma.undangan.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(undangan);
}

export async function POST(request: Request) {
  const { picture, themeId, type } = await request.json();
  await prisma.undangan.create({
    data: {
      picture,
      themeId,
      type,
    },
  });

  return NextResponse.json(
    { message: "Undangan Berhasil Ditambahkan" },
    { status: 201 },
  );
}
