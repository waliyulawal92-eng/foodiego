"use client";

import { Navbar } from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [meals, setMeals] = useState<any[]>([]);

const { addToCart } = useCart();

useEffect(() => {
  fetchMeals();
}, []);

const fetchMeals = async () => {
  try {
    const response = await fetch("/api/meals");

    const data = await response.json();

    setMeals(data);

  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50 via-white to-white" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-primary text-sm font-semibold mb-6 border border-green-100">
                🚀 #1 Food Delivery App in the City
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark tracking-tight mb-8 leading-tight">
                Delicious meals <br className="hidden sm:block" />
                <span className="text-primary relative inline-block">
                  delivered fast
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent"/>
                  </svg>
                </span>{" "}
                across your city.
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Discover the best food & drinks from top restaurants around you. Track your order in real-time.
              </p>

              {/* Hero Search Bar */}
              <div className="bg-white p-3 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow flex items-center bg-gray-50 rounded-xl px-4 py-3">
                  <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Enter your delivery address" 
                    className="bg-transparent w-full focus:outline-none text-dark placeholder-gray-500"
                  />
                </div>
                <div className="relative flex-grow flex items-center bg-gray-50 rounded-xl px-4 py-3">
                  <Search className="h-5 w-5 text-gray-400 mr-3 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Restaurant or cuisine" 
                    className="bg-transparent w-full focus:outline-none text-dark placeholder-gray-500"
                  />
                </div>
                <Button size="lg" className="shrink-0 rounded-xl whitespace-nowrap">
                  Find Food
                </Button>
              </div>

              {/* CTAs & Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/order">
          <Button size="lg" className="rounded-full shadow-lg shadow-primary/30">
           Order Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>

           <Link href="/restaurants">
            <Button variant="secondary" size="lg" className="rounded-full">
            Browse Restaurants
            </Button>
            </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Popular Restaurants Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-2">Popular Restaurants</h2>
                <p className="text-gray-600">Explore the most loved spots around you.</p>
              </div>
              <Link href="/restaurants" className="hidden sm:flex text-primary font-medium hover:text-primary/80 items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {POPULAR_RESTAURANTS.map((restaurant, i) => (
                <Card key={i} {...restaurant} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Meals Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-2">Trending Meals</h2>
                <p className="text-gray-600">What everyone&apos;s ordering right now.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {meals.map((meal: any) => (
  <div
    key={meal.id}
    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
  >
    <img
      src={meal.image}
      alt={meal.title}
      className="w-full h-56 object-cover"
    />

    <div className="p-5">
      <h3 className="text-xl font-bold mb-2">
        {meal.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {meal.description}
      </p>

      <p className="text-primary font-bold text-lg mb-4">
        ₦{meal.price}
      </p>

      <button
        onClick={() => addToCart(meal)}
        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-medium transition"
      >
        Add To Cart
      </button>
    </div>
  </div>
))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Mock Data
const POPULAR_RESTAURANTS = [
  {
    title: "Chicken Republic",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "₦1,000",
    tags: ["Fast Food", "Chicken", "Nigerian"],
    isNew: true,
  },
  {
    title: "The Place Restaurant",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    deliveryTime: "30-45 min",
    deliveryFee: "₦1,200",
    tags: ["Local", "Rice", "Swallow"],
  },
  {
    title: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "₦800",
    tags: ["Pizza", "Fast Food", "American"],
  },
];