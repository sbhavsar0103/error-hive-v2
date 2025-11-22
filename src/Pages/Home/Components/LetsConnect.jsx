import React from "react";
import FadeContent from "../../../Components/FadeContent/FadeContent";

const LetsConnect = () => {
  return (
    <section className="relative bg-[#060010] py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto bg-amber-500 rounded-3xl py-16 px-8 sm:px-12 relative z-10 shadow-[0_0_40px_rgba(245,158,11,0.4)]">
        
        <FadeContent direction="up" delay={0.2}>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#060010] mb-6 leading-tight">
            Ready to Build Something Amazing?
          </h2>
        </FadeContent>

        <FadeContent direction="up" delay={0.4}>
          <p className="text-lg sm:text-xl text-[#060010] leading-relaxed mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your project and create a custom web application that drives your
            business forward. Get started with a free consultation today.
          </p>
        </FadeContent>

        <FadeContent direction="up" delay={0.6}>
          <button className="px-10 py-4 bg-[#060010] text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Let&apos;s Connect
          </button>
        </FadeContent>
      </div>
    </section>
  );
};

export default LetsConnect;