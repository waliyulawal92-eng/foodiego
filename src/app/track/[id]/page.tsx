import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MapPin, Phone, ChefHat, CheckCircle2, Navigation, MessageCircle } from "lucide-react";

export default function TrackingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-dark">Order Tracking</h1>
              <p className="text-gray-600">Order #FDG-10293 • Estimated delivery: 2:45 PM</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm font-bold text-primary flex items-center">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              On the way
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-6">
            {/* Mock Map Area */}
            <div className="h-64 sm:h-80 w-full bg-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Map tracking" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
              
              {/* Map overlay UI */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-xl shadow-md text-dark hover:bg-gray-50"><Navigation className="h-5 w-5" /></button>
              </div>
            </div>

            {/* Rider Details */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Rider" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-white">4.9★</div>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">Michael O.</h3>
                  <p className="text-sm text-gray-500">Honda Courier • APP-123-XY</p>
                </div>
              </div>
              <div className="flex gap-2">

  <button
    className="rounded-full w-14 h-14 bg-gray-100 flex justify-center items-center"
  >
    <MessageCircle className="w-8 h-8 text-black" />
  </button>

  <button
    className="rounded-full w-14 h-14 bg-primary flex justify-center items-center shadow-md shadow-primary/30"
  >
    <Phone className="w-8 h-8 text-white" />
  </button>

</div>
            </div>

            {/* Tracking Steps */}
            <div className="p-6 sm:p-8">
              <div className="relative border-l-2 border-gray-100 ml-3 space-y-8">
                
                {/* Step 1: Accepted */}
                <div className="relative pl-8">
                  <div className="absolute -left-[11px] bg-primary rounded-full p-1 border-4 border-white">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Order Accepted</h4>
                    <p className="text-sm text-gray-500">2:15 PM • Chicken Republic confirmed your order.</p>
                  </div>
                </div>

                {/* Step 2: Cooking */}
                <div className="relative pl-8">
                  <div className="absolute -left-[11px] bg-primary rounded-full p-1 border-4 border-white">
                    <ChefHat className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Cooking</h4>
                    <p className="text-sm text-gray-500">2:20 PM • Your food is being prepared.</p>
                  </div>
                </div>

                {/* Step 3: On the way (Active) */}
                <div className="relative pl-8">
                  <div className="absolute -left-[11px] bg-white rounded-full p-1 border-4 border-primary">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Heading to you</h4>
                    <p className="text-sm text-dark font-medium">2:35 PM • Rider is on the way with your food.</p>
                  </div>
                </div>

                {/* Step 4: Delivered */}
                <div className="relative pl-8 opacity-40">
                  <div className="absolute -left-[11px] bg-gray-200 rounded-full p-1 border-4 border-white">
                    <MapPin className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-600">Delivered</h4>
                    <p className="text-sm text-gray-500">Awaiting drop-off</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
