import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {

    const id = context.params.id;

    await prisma.orderItem.deleteMany({
      where: {
        mealId: id,
      },
    });

    await prisma.meal.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      message: "Meal deleted successfully",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to delete meal",
      },
      {
        status: 500,
      }
    );
  }
}