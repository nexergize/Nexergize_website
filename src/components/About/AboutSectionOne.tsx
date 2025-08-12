'use client'
import React from "react";
import Image from "next/image";

const AboutSectionOne = () => {
  const processSteps = [
    {
      title: "Discovery & Analysis",
      description: "We understand your vision, study your market, and map the perfect path to success.",
      details: [
        "Market research and competitor analysis",
        "User behavior analysis",
        "Technical requirements gathering",
        "AI solution feasibility study"
      ],
      image: "/images/Whysus.png"
    },
    {
      title: "Strategy Development", 
      description: "From robust websites to powerful mobile apps, we build with precision, performance, and scalability in mind.",
      details: [
        "Custom AI strategy formulation",
        "Technology stack selection", 
        "Implementation roadmap creation",
        "Risk assessment and mitigation"
      ],
      image: "/images/Strategy.png"
    },
    {
      title: "Launch & Execution",
      description: "We don't stop at delivery — we ensure smooth launches, provide ongoing support, and keep your digital presence future-ready.",
      details: [
        "Agile development process",
        "Real-time monitoring and optimization",
        "Performance testing and validation",
        "Ongoing support and maintenance"
      ],
      image: "/images/Launch.png"
    }
  ];

  return (
    <>
      <section 
        id="process-section"
        className="relative py-16 md:py-20 lg:py-20 from-gray-900 via-slate-900 to-black overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 mb-6 text-sm font-semibold rounded-full bg-[#A12543] text-white uppercase tracking-wide hover:bg-[#8B1E3A] hover:scale-105 transition-all duration-300 cursor-default">
              WHY US
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight hover:text-gray-100 transition-colors duration-300">
              Why Choosing Our Sites
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-gray-200 transition-colors duration-300">
              We design, develop, and deliver solutions that work seamlessly, look stunning, and grow with your business
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="mb-8 flex justify-center relative overflow-hidden rounded-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={320}
                    height={320}
                    className="w-80 h-80 object-cover rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  
                  {/* Overlay that appears on hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-6">
                    <div className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      Step {index + 1}
                    </div>
                  </div> */}


                </div>

                {/* Content */}
                <div className="text-center relative">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#A12543] transition-all duration-300 transform group-hover:-translate-y-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-all duration-300">
                    {step.description}
                  </p>
                  
                  {/* Details List - Slides up on hover */}
                  {/* <div className="space-y-2 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-out">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                        style={{ transitionDelay: `${detailIndex * 100}ms` }}
                      >
                        <div className="w-1 h-1 bg-[#A12543] rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" 
                             style={{ transitionDelay: `${detailIndex * 100 + 200}ms` }}></div>
                        {detail}
                      </div>
                    ))}
                  </div> */}

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#A12543] to-pink-500 group-hover:w-20 transition-all duration-500 ease-out"></div>
                </div>

                {/* Connection Line (except for last item) - Animated */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#A12543] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
                )}


              </div>
            ))}
          </div>

          {/* Animated Progress Indicators */}
          {/* <div className="flex justify-center mt-16 space-x-4">
            {processSteps.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-[#A12543] hover:bg-pink-500 hover:scale-125 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div> */}


        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;