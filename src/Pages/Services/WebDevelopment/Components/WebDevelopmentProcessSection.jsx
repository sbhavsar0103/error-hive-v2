import { ArrowRight } from "lucide-react";
import WebDevelopmentStepCard from "./WebDevelopmentStepCard";

export default function WebDevelopmentProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Understanding Business Needs",
      items: [
        "Identify and focus on core features essential for the MVP",
        "Define objectives aligned with business goals",
      ],
    },
    {
      number: 2,
      title: "AI Feasibility & Data Assessment",
      items: [
        "Evaluate existing data and infrastructure",
        "Conduct feasibility studies to determine AI readiness",
      ],
    },
    {
      number: 3,
      title: "Solution Mapping & Strategy Development",
      items: [
        "Define AI models, tools, and technologies",
        "Create a structured roadmap for implementation",
      ],
    },
    {
      number: 4,
      title: "Implementation & Optimization",
      items: [
        "Deploy AI solutions with continuous monitoring",
        "Optimize performance based on real-world feedback",
      ],
    },
  ];

  return (
    <section className="relative bg-[#060010] py-24 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060010] via-[#0a0520] to-[#060010]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>

      {/* CONTENT GRID */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE (STICKY) */}
        <div className="space-y-8 lg:sticky lg:top-[15rem] self-start]">

          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 inline-block">
            Process
          </span>

          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our AI Process
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We follow structured and result-driven approaches to empower our AI consulting services.
            </p>
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <WebDevelopmentStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}