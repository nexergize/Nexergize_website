import React from 'react';
import Image from "next/image";

const CryptoHero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Centered Badge */}
        <div className="text-start mb-3">
          <span className="px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium backdrop-blur-sm">
            ABOUT US
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Right Content - Image (First on mobile, second on desktop) */}
          <div className="relative order-1 lg:order-2">
            <div className="max-w-md mx-auto lg:ml-40">
              <Image 
                src="/images/about.png"
                alt="Digital Innovation"
                width={400}
                height={360}
                className="w-full h-90 rounded-xl"
              />
            </div>
          </div>

          {/* Left Content - Text (Second on mobile, first on desktop) */}
          <div className="space-y-6 p-6 order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Your Gateway to Digital
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Growth And Innovation
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              At Nexergize, we&apos;re dedicated to empowering businesses to thrive in the 
              dynamic world of digital transformation and technology. Our team combines 
              deep technical expertise with innovative strategies to deliver cutting-edge 
              solutions that drive growth and impact. Whether you&apos;re launching a 
              new platform, building a decentralized application.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300"></div>
    </section>
  );
};

export default CryptoHero;