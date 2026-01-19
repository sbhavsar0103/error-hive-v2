import { useState } from "react";
import AIBusinessGrowthHeader from "./AIBusinessGrowthHeader";
import AIBusinessServiceList from "./AIBusinessServiceList";

export default function AIBusinessGrowthSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Customized AI Solutions",
      description:
        "As a custom AI product development company, we build AI products. Our AI products match unique business requirements and avoid generic AI implementations. They ensure - precision, transparency, and compliance throughout the development lifecycle.",
    },
    {
      id: 2,
      title: "Experienced AI Engineering Professionals",
      description:
        "We are a dedicated team of AI specialists, data scientists, and developers. Our AI-driven software development services come with practical experience and fulfil real-world needs. Our team brings together - cross-functional expertise and domain-specific modeling.",
    },
    {
      id: 3,
      title: "Sustainable & Scalable Architecture",
      description:
        "We have built - system architecture for sustainability, scalability, and long-term impact. Our teams have delivered future-proof AI solutions that grow and mature with business. Our architectural philosophy centers on - longevity, adaptability, and performance efficiency.",
    },
    {
      id: 4,
      title: "Seamless Cloud & On-Premise AI Deployment",
      description:
        "Our AI teams have empowered Generative AI product development for Startups and Enterprises. We assure that our AI systems for your business will work effectively within your infrastructure. To support this, we integrate - scalable architectures that adapt to evolving workloads. Our teams ensure compliance with - industry benchmarks and drive performance optimization across - cloud-native and hybrid environments."
    },
    {
      id: 5,
      title: "Ethical AI Practices",
      description:
        "We have designed AI products following the principles of fairness, transparency, and compliance. Our AI development practices meet integrity and accountability. To strengthen this commitment, we implement - bias mitigation frameworks, audit-ready documentation, and privacy-by-design protocols - throughout development phases."
    },
  ];

  return (
    <section className="relative bg-[#060010] py-20 px-6 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <AIBusinessGrowthHeader />

        <AIBusinessServiceList
          services={services}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </div>
    </section>
  );
}
