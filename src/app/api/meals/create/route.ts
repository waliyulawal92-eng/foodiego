import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    const body = await req.json();

    const {
      title,
      description,
      price,
      image,
      restaurantId,
    } = body;

    const meal = await prisma.meal.create({
      data: {
        title,
        description,
        price,
        image,
        restaurantId,
      },
    });

    return NextResponse.json(meal);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to create meal",
      },
      {
        status: 500,
      }
    );
  }
}