import { ArrowRight } from "lucide-react";
import StepCard from "./StepCard";

export default function AIBusinessProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Understanding Business Goals & AI Strategy",
      items: [
        "Identify core business challenges that AI can solve.",
        "Define key objectives and expected outcomes.",
        "Evaluate existing systems, infrastructure, and data readiness.",
      ],
    },
    {
      number: 2,
      title: "Custom AI Model Development",
      items: [
        "Design machine learning, deep learning, NLP, or computer vision models.",
        "Train models using real-world business data for better accuracy.",
        "Optimize AI algorithms to ensure efficiency, reliability, and fairness.",
      ],
    },
    {
      number: 3,
      title: "Seamless System Integration",
      items: [
        "Develop APIs and automation workflows for easy adoption.",
        "Ensure AI models integrate smoothly with existing business applications.",
        "Optimize data pipelines for real-time or batch processing needs.",
      ],
    },
    {
      number: 4,
      title: "Infrastructure Management: Cloud & On-Premises AI Solutions",
      items: [
        "Deploy AI solutions on cloud (AWS, Azure, Google Cloud) or on-premise environments based on business requirements.",
        "Ensure scalability, security, and compliance with enterprise-grade infrastructure.",
        "Optimize AI workloads to reduce operational costs and increase sustainability.",
      ],
    },
    {
      number: 5,
      title: "Testing, Deployment & Optimization",
      items: [
        "Perform rigorous model validation to ensure accuracy and efficiency.",
        "Deploy AI models with real-time monitoring and automated performance tracking.",
        "Continuously refine AI algorithms based on feedback and business changes.",
      ],
    },
    {
      number: 6,
      title: "Long-Term Support & Adaptive AI Evolution",
      items: [
        "Provide continuous monitoring, optimization, and retraining of AI models.",
        "Upgrade AI solutions to align with evolving business needs.",
        "Ensure long-term sustainability with AI lifecycle management.",
      ],
    }
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
            Our AI Approach
          </span>

          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              From Concept to Deployment
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md text-justify">
              Developing AI-powered products demands a - disciplined and business-aligned methodology. As a bespoke AI application development company, our structured framework ensures - operational efficiency, dependable performance, and sustainable growth.
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
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              items={step.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-32">
        <div className="relative bg-gradient-to-r from-amber-600/20 via-amber-500/15 to-amber-600/20 backdrop-blur-xl rounded-3xl p-12 lg:p-6 border border-amber-500/20 overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Stop Planning AI.
                  <br />
                  Start Profiting From It.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every day without intelligent automation costs you revenue, market share, and momentum. Get a custom AI roadmap with clear value projections and measurable returns for your business.
                </p>
              </div>

              <button className="group/btn relative px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 w-fit">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Call for AI Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="relative h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-amber-400/10 to-orange-400/5 rounded-2xl border border-amber-500/20 flex items-center justify-center overflow-hidden group/icon">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-6xl animate-pulse">
                  <span className="text-7xl">🤖</span>
                </div>
              </div>
            </div>
          </div>
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