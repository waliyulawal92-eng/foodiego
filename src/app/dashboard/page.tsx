"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { User, MapPin, CreditCard, Clock, Heart, Settings, LogOut, ChevronRight, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");
  const [restaurants, setRestaurants] = useState([]);
  const [meals, setMeals] = useState([]);
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState([]);

useEffect(() => {
  fetchRestaurants();
  fetchMeals();
  fetchUser();
  fetchOrders();
}, []);

const fetchRestaurants = async () => {
  try {

    const response = await fetch("/api/restaurants");

    const data = await response.json();

    setRestaurants(data);

  } catch (error) {
    console.log(error);
  }
};

const fetchMeals = async () => {
  try {

    const response = await fetch("/api/meals");

    const data = await response.json();

    setMeals(data);

  } catch (error) {
    console.log(error);
  }
};
const fetchUser = async () => {
  try {

    const response = await fetch("/api/auth/me");

    const data = await response.json();

    setUser(data.user);

  } catch (error) {
    console.log(error);
  }
};

const fetchOrders = async () => {
  try {

    const response = await fetch("/api/orders");

    const data = await response.json();

    setOrders(data);

  } catch (error) {
    console.log(error);
  }
};

const deleteRestaurant = async (id: string) => {
  try {

    const response = await fetch(`/api/restaurants/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      fetchRestaurants();
    } else {
      alert(data.error);
    }

  } catch (error) {
    console.log(error);
  }
};

const deleteMeal = async (id: string) => {
  try {

    const response = await fetch(`/api/meals/mealId?id=${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      fetchMeals();
    }

  } catch (error) {
    console.log(error);
  }
};

  const tabs = [
    { id: "restaurants", label: "My Restaurants", icon: User },
    { id: "meals", label: "My Meals", icon: User },
    { id: "orders", label: "Order History", icon: Clock },
    { id: "addresses", label: "My Addresses", icon: MapPin },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "settings", label: "Profile Settings", icon: Settings },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h2 className="font-bold text-dark">
                    {user?.name || "Loading..."}
                    </h2>

                    <p className="text-xs text-gray-500">
                    {user?.email || "Loading..."}
                  </p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                          isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3 font-medium">
                          <Icon className="h-5 w-5" />
                          {tab.label}
                        </div>
                        {isActive && <ChevronRight className="h-4 w-4" />}
                      </button>
                    );
                  })}
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-red-500 hover:bg-red-50 font-medium mt-4 pt-4 border-t border-gray-100">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm min-h-[600px]">
                
                {/* Orders Tab Content */}
                {activeTab === "orders" && (

  <div>

    <h2 className="text-2xl font-bold text-dark mb-6">
      Order History
    </h2>

    {orders.length === 0 ? (

      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <h3 className="text-2xl font-bold text-gray-700">
         No Orders Yet
        </h3>

        <p className="text-gray-500 mt-2">
           Your orders will appear here.
        </p>
      </div>

    ) : (

      <div className="space-y-6">

        {orders.map((order: any) => (

          <div
            key={order.id}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-xl font-bold">
                  Order #{order.id.slice(0, 8)}
                </h3>

                <p className="text-gray-500 mt-1">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

              </div>

              <div className="text-right">

                <p className="text-2xl font-bold text-primary">
                  ₦{order.total}
                </p>

                <span className="text-sm text-green-600 font-medium">
                  {order.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    )}

  </div>
)}

 {activeTab === "restaurants" && (
  <div>

    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-dark">
        My Restaurants
      </h2>

      <Link href="/dashboard/add-restaurant">
        <Button>
          Add Restaurant
        </Button>
      </Link>
    </div>

    {restaurants.length === 0 ? (

      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <h3 className="text-2xl font-bold text-gray-700">
          No restaurants yet
        </h3>

        <p className="text-gray-500 mt-2">
          Add your first restaurant to get started.
        </p>
      </div>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {restaurants.map((restaurant: any) => (

          <div
            key={restaurant.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-bold mb-2">
                {restaurant.name}
              </h3>

              <p className="text-gray-600 text-sm">
                {restaurant.description}
              </p>

              <button
  onClick={() => deleteRestaurant(restaurant.id)}
  className="mt-4 text-red-500 font-medium hover:text-red-700"
>
  Delete
</button>
            </div>

          </div>

        ))}

      </div>

    )}

  </div>
)}

{activeTab === "meals" && (
  <div>

    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-dark">
        My Meals
      </h2>

      <Link href="/dashboard/add-meal">
        <Button>
          Add Meal
        </Button>
      </Link>
    </div>

    {meals.length === 0 ? (

      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <h3 className="text-2xl font-bold text-gray-700">
          No meals yet
        </h3>

        <p className="text-gray-500 mt-2">
          Add your first meal to get started.
        </p>
      </div>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {meals.map((meal: any) => (

          <div
            key={meal.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >

            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-48 object-cover"
            />

          <div className="p-5">

  <h3 className="text-xl font-bold mb-2">
    {meal.title}
  </h3>

  <p className="text-gray-600 text-sm mb-3">
    {meal.description}
  </p>

  <p className="text-primary font-bold text-lg">
    ₦{meal.price}
  </p>

  <button
  onClick={() => deleteMeal(meal.id)}
  className="mt-4 bg-red-500 text-black px-4 py-2 rounded-lg border"
>
  Delete Meal
</button>

</div>

          </div>

        ))}

      </div>

    )}

  </div>
)}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
