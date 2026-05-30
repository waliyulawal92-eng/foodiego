import React from "react";
import Image from "next/image";
import { Star, Clock, Truck } from "lucide-react";

interface CardProps {
  title: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  tags?: string[];
  isNew?: boolean;
}

export function Card({
  title,
  image,
  rating,
  deliveryTime,
  deliveryFee,
  tags = [],
  isNew = false,
}: CardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-grey/50 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Replacing next/image with img for mockup purposes until images are added */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            New
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-dark truncate pr-2">{title}</h3>
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg shrink-0">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-bold text-dark">{rating}</span>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex gap-2 mb-4 overflow-hidden">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <Truck className="h-4 w-4 mr-1.5 text-gray-400" />
            <span>{deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
