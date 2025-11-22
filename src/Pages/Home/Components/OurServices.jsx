import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import ShinyText from "../../../Components/ShinyText/ShinyText";
import FadeContent from "../../../Components/FadeContent/FadeContent";
import {
    Code,
    Brain,
    MessageSquare,
    Globe,
    Database,
    Cloud,
    Cpu,
    Zap,
} from "lucide-react";

const OurServices = () => {
    const services = [
        {
            icon: Code,
            title: "Python Development",
            description:
                "Build robust and scalable applications with Python, leveraging its powerful libraries and frameworks for enterprise solutions.",
        },
        {
            icon: Brain,
            title: "Artificial Intelligence",
            description:
                "Implement cutting-edge AI solutions to automate processes, gain insights, and drive innovation in your business.",
        },
        {
            icon: MessageSquare,
            title: "LLM Integration",
            description:
                "Harness the power of Large Language Models to create intelligent chatbots, content generation, and natural language processing solutions.",
        },
        {
            icon: Globe,
            title: "Web Development",
            description:
                "Create stunning, responsive, and high-performance web applications using modern frameworks and best practices.",
        },
        {
            icon: Database,
            title: "Data Science",
            description:
                "Transform raw data into actionable insights with advanced analytics, visualization, and predictive modeling.",
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description:
                "Deploy and manage scalable cloud infrastructure on AWS, Azure, or GCP with optimized performance and cost.",
        },
        {
            icon: Cpu,
            title: "Machine Learning",
            description:
                "Develop custom ML models for classification, regression, clustering, and recommendation systems tailored to your needs.",
        },
        {
            icon: Zap,
            title: "API Development",
            description:
                "Design and build RESTful and GraphQL APIs that are secure, efficient, and easy to integrate with your applications.",
        },
    ];

    return (
        <section
            id="services"
            className="bg-[#060010] py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Our <span className="text-amber-500">Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We deliver cutting-edge technology solutions tailored to your business needs
                    </p>
                </div>

                {/* Service Cards Grid */}
                <FadeContent blur={false} duration={200} easing="ease-out" initialOpacity={0}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <SpotlightCard key={index} className="h-full">
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="mb-4 p-3 bg-[#060010] rounded-xl w-fit">
                                            <Icon className="w-8 h-8 text-amber-500" />
                                        </div>

                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-500 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-3">
                                            {/* <ShinyText
                                                text={service.title}
                                                disabled={false}
                                                speed={3}
                                            /> */}
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed flex-grow text-justify">
                                            <ShinyText
                                                text={service.description}
                                                disabled={false}
                                                speed={3}
                                            />
                                        </p>

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

export default OurServices;
