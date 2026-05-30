"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";

const meals = [
  {
    id: "1",
    title: "Jollof Rice & Chicken",
    image:
      "https://images.unsplash.com/photo-1604908176997-431f6972b47b",
    price: 3500,
    time: "25 mins",
    rating: "4.8",
  },
  {
    id: "2",
    title: "Burger & Fries",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: 4000,
    time: "20 mins",
    rating: "4.7",
  },
  {
    id: "3",
    title: "Pepper Soup",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    price: 2500,
    time: "15 mins",
    rating: "4.9",
  },
  {
    id: "4",
    title: "Pizza Special",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    price: 5000,
    time: "30 mins",
    rating: "4.8",
  },
];

export default function OrderPage() {
    const { addToCart } = useCart();
  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-[#f7f7f7] px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-[#0B132B]">
            Order Food
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Choose your favorite meals and add them to cart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {meals.map((meal: any) => (
            <div
              key={meal.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-xl text-[#0B132B]">
                    {meal.title}
                  </h2>

                  <span className="text-yellow-500 font-semibold">
                    ⭐ {meal.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-500 text-sm mb-5">
                  <span>{meal.time}</span>
                  <span>₦{meal.price}</span>
                </div>

                <button
                  onClick={() => addToCart(meal)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold transition"
                >
                  Add To Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  </>
);
}
