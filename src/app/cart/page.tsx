"use client";

import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";

export default function CartPage() {

  const {
    cart,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">

        <h1 className="text-4xl font-bold mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (

          <div className="bg-white rounded-3xl border border-gray-200 p-20 text-center">

            <h2 className="text-3xl font-bold mb-3">
              Cart is Empty
            </h2>

            <p className="text-gray-500">
              Add meals to your cart.
            </p>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-gray-200 p-5 flex gap-5"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h2>

                    <p className="text-primary font-bold text-xl mb-3">
                      ₦{item.price}
                    </p>

                    <p className="text-gray-500">
                      Quantity: {item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 h-fit sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">

                <span className="text-gray-600">
                  Total
                </span>

                <span className="font-bold text-2xl">
                  ₦{total}
                </span>

              </div>

              <button
                className="w-full mt-6 bg-primary hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}