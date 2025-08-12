"use client";
import Aurora from "../Background/Aurora/Aurora"; // adjust path if needed

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-[120%] -z-10">
  <Aurora
    colorStops={["#4A6CF7", "#A12543", "#4A6CF7"]}
    amplitude={1.2}
    blend={0.6}
    speed={0.8}
  />
</div>


      {/* Hero Content */}
      <div className="max-w-3xl mx-auto">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20 transition">
          {/* Twinkling SVG star with SMIL animation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.5 6h6l-4.8 3.8L17.5 20 12 16.5 6.5 20l1.8-8.2L3.5 8h6L12 2z">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                values="1;1.2;1"
                dur="1.5s"
                repeatCount="indefinite"
                additive="sum"
              />
            </path>
          </svg>
          Your Vision, Our Innovation
        </span>

        <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Build. Grow. Succeed <br /> One Stop. Zero Limits
        </h1>
      </div>
    </section>
  );
}
