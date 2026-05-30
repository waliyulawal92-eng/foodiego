import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    await prisma.meal.deleteMany({
      where: {
        restaurantId: id,
      },
    });

    await prisma.restaurant.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Restaurant deleted successfully",
    });

  } catch (error) {

    console.log("DELETE ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to delete restaurant",
      },
      {
        status: 500,
      }
    );
  }
}