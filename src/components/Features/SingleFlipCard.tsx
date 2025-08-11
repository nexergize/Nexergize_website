"use client";

import React from "react";
import { Feature } from "@/types/feature";

const SingleFlipCard = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="group h-80 w-full perspective">
      <div className="relative h-full w-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front of the card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-amber-100 p-8 shadow-lg dark:from-gray-800 dark:to-gray-900">
            <div 
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg"
              style={{ backgroundColor: '#A12543' }}
            >
              {icon}
            </div>
            <h3 className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white">
              {title}
            </h3>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Hover to learn more
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div 
            className="flex h-full w-full flex-col justify-center rounded-xl p-8 text-white shadow-lg"
            style={{ 
              background: `linear-gradient(to bottom right, #A12543, #8B1E3F)`
            }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              {React.cloneElement(icon, { className: "fill-current text-white" })}
            </div>
            <h3 className="mb-4 text-lg font-bold">
              {title}
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFlipCard;