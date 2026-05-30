import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

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