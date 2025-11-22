import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import { Atom } from "lucide-react";

const WhyChooseUs = () => {
    const advantages = [
        {
            title: "Offshore Outsourcing Expertise",
            desc: "We excel in delivering efficient and cost-effective IT services, ensuring seamless communication and smooth project management from start to finish.",
        },
        {
            title: "One-Stop IT Solutions",
            desc: "From consulting and UI/UX design to development, deployment, and maintenance, we provide all your IT needs under one roof, saving time and maximizing convenience.",
        },
        {
            title: "Proven Track Record",
            desc: "With a portfolio of successful projects and a growing base of satisfied clients, we have earned a reputation for reliability, quality, and excellence.",
        },
        {
            title: "Sustainable and Scalable Solutions",
            desc: "Our future-ready IT solutions are designed to adapt and scale as your business grows, ensuring long-term value and dependability.",
        },
    ];

    const cards = [
        {
            title: "Expert Team",
            desc: "Our developers are highly skilled in cutting-edge technologies to deliver top-quality solutions.",
        },
        {
            title: "Scalable Solutions",
            desc: "We build systems that grow seamlessly with your business and evolving demands.",
        },
        {
            title: "Client-Centric Approach",
            desc: "We focus on understanding your business goals to deliver tailor-made solutions.",
        },
        {
            title: "Agile Development",
            desc: "Flexible and iterative process ensures faster delivery and continuous improvement.",
        },
    ];

    return (
        <section id="why-choose-us" className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Why <span className="text-amber-500">Choose Us</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We combine innovation, expertise, and dedication to help you achieve your digital goals.
                    </p>
                </div>
                <FadeContent blur={false} duration={200} easing="ease-out" initialOpacity={0}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-8">
                                {advantages.map((adv, index) => (
                                    <li key={index} className="flex items-start gap-4 text-white">
                                        <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/30 mt-1">
                                            <Atom className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent font-semibold mb-2">
                                                {/* <ShinyText text={adv.title} speed={3} /> */}
                                                {adv.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="flex flex-wrap justify-center gap-6">
                                {cards.slice(0, 2).map((card, index) => (
                                    <SpotlightCard
                                        key={index}
                                        className="w-[280px] bg-[#0a001b] p-6 rounded-2xl"
                                    >
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-3">
                                            {/* font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent */}
                                            {/* <ShinyText text={card.title} speed={3} /> */}
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </SpotlightCard>
                                ))}
                            </div>

                            {/* Row 2: 2 Cards */}
                            <div className="flex flex-wrap justify-center gap-6 mt-4">
                                {cards.slice(2, 4).map((card, index) => (
                                    <SpotlightCard
                                        key={index}
                                        className="w-[280px] bg-[#0a001b] p-6 rounded-2xl"
                                    >
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-3">
                                            {/* <ShinyText text={card.title} speed={3} /> */}
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeContent>
            </div>
        </section>
    );
};

export default WhyChooseUs;