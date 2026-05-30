"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddRestaurantPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/restaurants/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
        name,
        description,
        image,
        ownerId: "cmpi84i2s0001uk943g3gw8x2",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Restaurant created successfully!");

        router.push("/dashboard");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Add Restaurant
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Restaurant Name
            </label>

            <input
              type="text"
              placeholder="Enter restaurant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              placeholder="Restaurant description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition"
          >
            Create Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}