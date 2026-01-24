import { ChevronRight } from "lucide-react";

export default function GenerativeAIServiceDetails({ selectedService }) {
  const IconComponent = selectedService.icon;

  return (
    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-3xl p-8 lg:p-12 flex flex-col justify-between backdrop-blur-sm border border-white/5">
      <div>
        {/* Decorative grid dots */}
        <div className="grid grid-cols-8 gap-3 mb-12 opacity-20">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-amber-500/30" />
          ))}
        </div>

        {/* Icon */}
        <div className="mb-8 inline-flex p-3 rounded-2xl bg-amber-500/10">
          <IconComponent className="w-8 h-8 text-amber-500" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {selectedService.title}
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {selectedService.description}
        </p>
      </div>

      <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-[#060010] rounded-xl font-semibold text-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105">
        Get Started
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
