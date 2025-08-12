"use client";

import React from "react";
import flipCardData from "./flipCardData";
import Image from "next/image";

type BentoItem = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link?: string;
};

const Features = () => {
  const bentoItems: BentoItem[] = flipCardData.map((feature) => ({
    title: feature.title,
    subtitle: feature.subtitle,
    description: feature.paragraph,
    image: feature.image,
  }));

  return (
    <>
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)translateX(0)}25%{transform:translateY(-10px)translateX(5px)}50%{transform:translateY(-5px)translateX(-5px)}75%{transform:translateY(-15px)translateX(3px)}}
        @keyframes drift{0%{transform:translateX(-10px)translateY(0)scale(.8);opacity:.3}50%{transform:translateX(10px)translateY(-8px)scale(1.2);opacity:.6}100%{transform:translateX(-5px)translateY(0)scale(.8);opacity:.3}}
        @keyframes rise{0%{transform:translateY(0);opacity:0}50%{opacity:.6}100%{transform:translateY(-100px);opacity:0}}
        @keyframes pulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:.6;transform:scale(1.05)}}
        
        /* Fixed position animations */
        .particle-1 { left: 10%; top: 20%; animation: float 5s ease-in-out infinite 0.5s; }
        .particle-2 { left: 80%; top: 15%; animation: float 4s ease-in-out infinite 1s; }
        .particle-3 { left: 60%; top: 70%; animation: float 6s ease-in-out infinite 1.5s; }
        .particle-4 { left: 30%; top: 80%; animation: float 4.5s ease-in-out infinite 0.8s; }
        .particle-5 { left: 90%; top: 60%; animation: float 5.5s ease-in-out infinite 2s; }
        .particle-6 { left: 15%; top: 45%; animation: float 3.8s ease-in-out infinite 0.3s; }
        .particle-7 { left: 70%; top: 25%; animation: float 4.2s ease-in-out infinite 1.8s; }
        .particle-8 { left: 40%; top: 90%; animation: float 5.2s ease-in-out infinite 1.2s; }
        
        .drift-1 { left: 25%; top: 35%; animation: drift 6s linear infinite 1s; }
        .drift-2 { left: 75%; top: 50%; animation: drift 5s linear infinite 2s; }
        .drift-3 { left: 50%; top: 75%; animation: drift 7s linear infinite 0.5s; }
        .drift-4 { left: 10%; top: 65%; animation: drift 5.5s linear infinite 1.5s; }
        .drift-5 { left: 85%; top: 30%; animation: drift 6.5s linear infinite 2.5s; }
        
        .rise-1 { left: 20%; animation: rise 6s linear infinite 1s; }
        .rise-2 { left: 60%; animation: rise 7s linear infinite 2s; }
        .rise-3 { left: 40%; animation: rise 5s linear infinite 0.5s; }
        .rise-4 { left: 80%; animation: rise 8s linear infinite 3s; }
      `}</style>
      
      <section className="py-16 md:py-20 lg:py-20 from-gray-900 via-slate-900 to-black">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="text-start mb-4">
              <span className="inline-block px-4 py-2 bg-indigo-900/50 text-indigo-400 text-sm font-semibold rounded-full uppercase tracking-wide border border-indigo-800/30">
                OUR SERVICES
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  What we provide
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our team of experts brings years of experience in crafting 
                  high-impact websites and mobile apps that drive results across industries.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bentoItems.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-indigo-600/50 h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0">
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-1" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-2" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-3" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-4" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-5" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-6" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-7" />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-60 particle-8" />
                    
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 blur-sm drift-1" />
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 blur-sm drift-2" />
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 blur-sm drift-3" />
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 blur-sm drift-4" />
                    <div className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 blur-sm drift-5" />
                  </div>
                  
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.25) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  
                  <div className="absolute inset-0">
                    <div className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40 rise-1" style={{ top: '100%' }} />
                    <div className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40 rise-2" style={{ top: '100%' }} />
                    <div className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40 rise-3" style={{ top: '100%' }} />
                    <div className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40 rise-4" style={{ top: '100%' }} />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-900/50 p-3">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <p className="text-lg text-gray-300 font-medium">
                      {feature.subtitle}
                    </p>
                  )}
                  <p className="text-gray-400 leading-relaxed mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;