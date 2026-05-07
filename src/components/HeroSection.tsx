
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
          Apply Now For Loan
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
