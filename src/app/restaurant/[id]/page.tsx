import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Star, Clock, Truck, Heart, Info, Plus } from "lucide-react";

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20">
        {/* Cover Image & Header */}
        <div className="relative h-64 md:h-80 w-full bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="max-w-7xl mx-auto flex items-end justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-lg hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Chicken Republic</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                    <span className="flex items-center bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      4.8 (2.5k reviews)
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      25-35 min
                    </span>
                    <span className="flex items-center">
                      <Truck className="h-4 w-4 mr-1" />
                      ₦1,000 Delivery
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="secondary" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="secondary" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                  <Info className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Menu Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide sticky top-16 bg-white z-40 py-4 border-b border-gray-100">
              {["Popular", "Value Meals", "Chicken", "Sides", "Drinks"].map((cat, i) => (
                <button
                  key={cat}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                    i === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <h2 className="text-2xl font-bold text-dark mb-6">Popular</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow bg-white cursor-pointer group">
                  <div className="flex-1">
                    <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">Refuel Meal</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                      1 piece of crunch chicken, regular chips and a 35cl pet drink.
                    </p>
                    <p className="font-bold text-primary">₦2,500</p>
                  </div>
                  <div className="relative w-28 h-28 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1626082896492-766af4eb65ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Meal"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <button className="absolute -bottom-2 -right-2 bg-white text-primary border border-gray-100 shadow-sm rounded-full p-2 hover:bg-gray-50">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* People Also Ordered */}
            <h2 className="text-2xl font-bold text-dark mt-12 mb-6">People Also Ordered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card
                title="Meat Pie"
                image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                rating={4.5}
                deliveryTime="Instant"
                deliveryFee="Free"
              />
              <Card
                title="Bottled Water"
                image="https://images.unsplash.com/photo-1548839140-29a749e1bc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                rating={4.8}
                deliveryTime="Instant"
                deliveryFee="Free"
              />
            </div>
          </div>

          {/* Sidebar / Cart Preview (Hidden on small screens) */}
          <div className="hidden md:block w-80 shrink-0">
            <div className="sticky top-24 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-dark">Your Order</h3>
              <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                <img src="https://illustrations.popsy.co/amber/basket.svg" alt="Empty Cart" className="w-32 h-32 mb-4 opacity-50" />
                <p>Your cart is empty.</p>
                <p className="text-sm mt-1 text-center">Add items from the menu to start a new order.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
