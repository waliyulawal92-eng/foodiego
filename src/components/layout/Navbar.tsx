"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [user, setUser] = useState<any>(null);

  const { cart } = useCart();

useEffect(() => {
  const getUser = async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUser();
}, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
           <Link href="/" className="flex items-center">
  <img
    src="/logo.svg"
    alt="FoodieGo Logo"
    className="h-20 w-auto"
  />
</Link>
          </div>

          {/* Desktop Search Bar (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search restaurants, foods..."
                className="block w-full pl-10 pr-3 py-2 border border-grey rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-dark hover:text-primary transition-colors p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
               {cart.length}
              </span>
            </Link>
            
            <div className="hidden sm:flex items-center space-x-3 ml-4">

  {user ? (
    <div className="flex items-center gap-3">
      <span className="font-medium text-dark">
        Hi, {user.name}
      </span>
<Link
  href="/dashboard"
  className="font-medium text-primary hover:text-primary/80"
>
  Dashboard
</Link>
   <button
  onClick={() => {
    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setUser(null);
  }}
  className="text-sm font-medium text-dark hover:text-primary transition-colors"
>
  Logout
</button>
    </div>
  ) : (
    <>
      <Link href="/login">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
      </Link>

      <Link href="/signup">
        <Button
          variant="primary"
          size="sm"
          className="rounded-full"
        >
          Sign up
        </Button>
      </Link>
    </>
  )}

</div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden">
              <button className="text-dark hover:text-primary p-2">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
