'use client'
import React from "react";

const AboutSectionOne = () => {
  const processSteps = [
    {
      title: "Discovery & Analysis",
      description: "Through AI-powered analysis and comprehensive research, we understand your business needs and identify opportunities.",
      details: [
        "Market research and competitor analysis",
        "User behavior analysis",
        "Technical requirements gathering",
        "AI solution feasibility study"
      ],
      image: "/images/discovery-analysis.png" // Add your PNG image path here
    },
    {
      title: "Strategy Development", 
      description: "Through AI-powered planning and strategic thinking, we develop customized solutions tailored to your goals.",
      details: [
        "Custom AI strategy formulation",
        "Technology stack selection", 
        "Implementation roadmap creation",
        "Risk assessment and mitigation"
      ],
      image: "/images/discovery-analysis.png" // Add your PNG image path here
    },
    {
      title: "Launch & Execution",
      description: "Through AI-powered deployment and continuous optimization, we bring your vision to life with measurable results.",
      details: [
        "Agile development process",
        "Real-time monitoring and optimization",
        "Performance testing and validation",
        "Ongoing support and maintenance"
      ],
      image: "/images/discovery-analysis.png" // Add your PNG image path here
    }
  ];

  return (
    <>
      <section 
        id="process-section"
        className="relative py-16 md:py-20 lg:py-20  from-gray-900 via-slate-900 to-black overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 mb-6 text-sm font-semibold rounded-full bg-[#A12543] text-white uppercase tracking-wide">
              PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How it works anyway
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures efficient delivery of AI-powered solutions tailored to your business needs
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Image Container */}
                <div className="mb-8 flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details List - Always Visible */}
                  {/* <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-[#A12543] rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Connection Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#A12543] to-transparent opacity-30"></div>
                )}
              </div>
            ))}
          </div>

          {/* Static Progress Indicators */}
          {/* <div className="flex justify-center mt-16 space-x-4">
            {processSteps.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-[#A12543]"
              />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;