import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      image,
      ownerId,
    } = body;

    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        description,
        image,
        ownerId,
      },
    });

    return NextResponse.json(restaurant);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to create restaurant" },
      { status: 500 }
    );
  }
}