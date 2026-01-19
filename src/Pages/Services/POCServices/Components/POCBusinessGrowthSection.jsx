import { useState } from "react";
import POCHeader from "./POCHeader";
import POCServiceList from "./POCServiceList";

export default function POCBusinessGrowthSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Risk Reduction",
      description:
        "Identify potential pitfalls before full-scale deployment. Our AI experts validate concepts early, ensuring your investment is protected and your project stays on track.",
    },
    {
      id: 2,
      title: "Cost-Efficient Validation",
      description:
        "As an AI POC implementation company, we help you avoid unnecessary expenses. Our devoted AI teams assist in confirming viability prior to full-scale deployment. AI initiatives promise transformative impact - but without validation, they can risk incurring significant costs. Our cost-efficient validation approach ensures that every project - starts strong, stays aligned, and scales sustainably.",
    },
    {
      id: 3,
      title: "Stakeholder Confidence",
      description:
        "Build trust with your team and investors through demonstrated results. A successful POC provides concrete evidence of AI potential, strengthening support for full deployment.",
    },
  ];

  return (
    <section className="relative bg-[#060010] py-20 px-6 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <POCHeader />

        <POCServiceList
          services={services}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </div>
    </section>
  );
}
