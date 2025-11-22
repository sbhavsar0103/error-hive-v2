import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import { Target, Eye, Heart } from "lucide-react";

const OurMission = () => {
  const missionCards = [
    {
      icon: Target,
      title: "Mission",
      description:
        "Our mission is to empower businesses and individuals through innovative technology, fostering growth, creativity, and meaningful digital experiences that make a difference.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "Our vision is to lead the digital frontier with purpose — creating sustainable, intelligent, and human-centered solutions that inspire progress and redefine possibilities.",
    },
    {
      icon: Heart,
      title: "Purpose",
      description:
        "Our purpose is to combine innovation with empathy — delivering value, building trust, and driving transformation that benefits both people and the planet.",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <FadeContent blur={false} duration={200} easing="ease-out" initialOpacity={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <SpotlightCard key={index} className="h-full">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-500 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-3">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-grow text-justify">
                      <ShinyText
                        text={card.description}
                        disabled={false}
                        speed={3}
                      />
                    </p>

                    {/* Button */}
                    <button className="mt-6 text-amber-500 hover:text-amber-400 font-semibold text-sm flex items-center group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default OurMission;
