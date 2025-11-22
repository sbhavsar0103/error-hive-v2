import React from "react";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import Cubes from "../../../Components/Cubes/Cubes";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import { Sparkles, Zap } from "lucide-react";

const OurStory = () => {
  const cards = [
    {
      title: "Driven by Passion",
      desc: "Our journey began with a shared belief — technology should not just solve problems, but spark inspiration. Every line of code we write carries the essence of creativity and precision.",
      icon: Sparkles,
    },
    {
      title: "Innovation with Purpose",
      desc: "We don't chase trends. We build ideas that last — merging intuitive design with intelligent engineering to craft experiences that truly matter.",
      icon: Zap,
    },
  ];

  return (
    <section className="relative bg-[#060010] min-h-screen lg:h-screen flex items-center px-4 sm:px-8 lg:px-20 py-16 lg:py-0 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-12xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center lg:text-left">
          <FadeContent direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide">
                Our Heritage
              </span>
            </div>
          </FadeContent>

          <FadeContent direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-4 sm:mb-6 leading-tight">
              The Story Behind{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Error-Hive
              </span>
            </h2>
          </FadeContent>

          <FadeContent direction="up" delay={0.3}>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light">
              What began as a small team of dreamers evolved into a collective of
              innovators united by one mission — to create technology that feels
              human and performs flawlessly.
            </p>
          </FadeContent>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <FadeContent direction="up" delay={0.4}>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-amber-300/80 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                    Our Philosophy
                  </p>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                    We've built, broken, and rebuilt countless ideas, each one
                    shaping who we are today. Every failure became a stepping
                    stone, every success a foundation for something greater.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    At{" "}
                    <span className="text-white font-semibold">
                      Error-Hive Solution
                    </span>
                    , we don't just build digital products; we build trust,
                    relationships, and meaningful experiences that echo far
                    beyond the screen.
                  </p>
                </div>
              </div>
            </FadeContent>

            {/* Cards */}
            <FadeContent direction="up" delay={0.6}>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                {cards.map((card, index) => {
                  const IconComponent = card.icon;
                  return (
                    <div key={index} className="group">
                      <SpotlightCard className="relative overflow-hidden bg-gradient-to-br from-[#0f001f] to-[#0a001b] border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 p-4 sm:p-6 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-300"></div>

                        <div className="relative z-10 flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors duration-300">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">
                              <ShinyText text={card.title} speed={4} />
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </SpotlightCard>
                    </div>
                  );
                })}
              </div>
            </FadeContent>
          </div>

          {/* RIGHT SIDE (Cubes hidden on mobile) */}
          <FadeContent
            direction="up"
            delay={0.5}
            className="lg:col-span-6 hidden lg:block"
          >
            <div className="relative flex justify-center items-center h-full min-h-[500px]">
              <div className="absolute inset-0 flex justify-center items-center">
                <Cubes
                  gridSize={12}
                  cubeSize={60}
                  maxAngle={45}
                  radius={3}
                  borderStyle="2px dashed #D97706"
                  faceColor="#1a1a2e"
                  rippleColor="#FBBF24"
                  rippleSpeed={1.5}
                  autoAnimate={true}
                  rippleOnClick={true}
                />
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
