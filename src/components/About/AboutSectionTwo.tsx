import React from 'react';

const CryptoHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 p-6">
            {/* Badge */}
            <div className="inline-flex">
              <span className="px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium backdrop-blur-sm">
                GROW YOUR BUSINESS
              </span>
            </div>

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
              At Nexergize, we're dedicated to empowering businesses to thrive in the 
              dynamic world of digital transformation and technology. Our team combines 
              deep technical expertise with innovative strategies to deliver cutting-edge 
              solutions that drive growth and impact. Whether you're launching a 
              new platform, building a decentralized application.
            </p>


          </div>

          {/* Right Content - Clean Image */}
          <div className="relative">
            <div className="max-w-md ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Digital Innovation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
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