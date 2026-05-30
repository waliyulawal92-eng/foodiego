import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MapPin, CreditCard, Wallet, Banknote, Tag, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark mb-8">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Forms */}
            <div className="flex-1 space-y-6">
              {/* Delivery Details */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-dark mb-4 flex items-center">
                  <MapPin className="mr-2 text-primary h-6 w-6" /> Delivery Address
                </h2>
                <div className="space-y-4">
                  <Input label="Full Name" defaultValue="John Doe" />
                  <Input label="Street Address" placeholder="123 Main Street" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="City/Area" placeholder="Victoria Island" />
                    <Input label="Phone Number" defaultValue="+234 800 000 0000" />
                  </div>
                  <Input label="Delivery Instructions (Optional)" placeholder="Leave at the reception..." />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-dark mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {/* Card Option */}
                  <label className="flex items-center p-4 border border-primary bg-green-50 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary h-4 w-4" defaultChecked />
                    <div className="ml-3 flex items-center justify-between w-full">
                      <div className="flex items-center font-medium text-dark">
                        <CreditCard className="mr-2 h-5 w-5 text-gray-500" /> Debit / Credit Card
                      </div>
                      <span className="text-xs font-semibold bg-white px-2 py-1 rounded text-primary border border-green-200">Paystack</span>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary h-4 w-4" />
                    <div className="ml-3 flex items-center font-medium text-dark">
                      <Wallet className="mr-2 h-5 w-5 text-gray-500" /> Bank Transfer
                    </div>
                  </label>

                  {/* Pay on Delivery */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="text-primary focus:ring-primary h-4 w-4" />
                    <div className="ml-3 flex items-center font-medium text-dark">
                      <Banknote className="mr-2 h-5 w-5 text-gray-500" /> Pay on Delivery
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary (Sticky Cart) */}
            <div className="lg:w-96 shrink-0">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-dark mb-6">Order Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex items-center gap-3 pb-4 border-b border-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1626082896492-766af4eb65ed?ixlib=rb-4.0.3&w=100&q=80" 
                        alt="Item" 
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-dark">Refuel Meal</h4>
                        <p className="text-xs text-gray-500">Chicken Republic</p>
                        <p className="font-bold text-primary mt-1">₦2,500</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center bg-gray-50 rounded-lg p-1">
                          <button className="p-1 hover:bg-white rounded shadow-sm text-gray-500"><Minus className="h-3 w-3" /></button>
                          <span className="text-xs font-bold w-6 text-center">1</span>
                          <button className="p-1 hover:bg-white rounded shadow-sm text-gray-500"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button className="text-red-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code */}
                <div className="mb-6 flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input type="text" placeholder="Promo code" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
                  </div>
                  <Button variant="secondary" size="sm" className="rounded-xl">Apply</Button>
                </div>

                {/* Totals */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₦5,000</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₦1,000</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service Fee</span>
                    <span>₦200</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-dark">
                    <span>Total</span>
                    <span>₦6,200</span>
                  </div>
                </div>

                <Link href="/track/12345">
                  <Button fullWidth size="lg">Place Order - ₦6,200</Button>
                </Link>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
