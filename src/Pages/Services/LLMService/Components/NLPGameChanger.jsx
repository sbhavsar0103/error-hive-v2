import React from "react";
import SpotlightCard from "../../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../../Components/FadeContent/FadeContent";
import NLPGameChangerHeader from "./NLPGameChangerHeader";
import { Target, Eye, Heart } from "lucide-react";

const NLPGameChanger = () => {
    const NLPGameChangerCards = [
        {
            icon: Target,
            title: "80% of enterprise data",
            description: "is unstructured, making NLP essential for business intelligence.",
        },
        {
            icon: Eye,
            title: "60% faster document processing",
            description: "with AI-driven text understanding.",
        },
        {
            icon: Heart,
            title: "50% reduction in manual efforts",
            description: "for customer support through AI chatbots.",
        },
    ];

    return (
        <section id="mission" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
            <NLPGameChangerHeader />
            <div className="max-w-7xl mx-auto">
                <FadeContent blur={false} duration={200} easing="ease-out" initialOpacity={0}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {NLPGameChangerCards.map((card, index) => {
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

export default NLPGameChanger;
