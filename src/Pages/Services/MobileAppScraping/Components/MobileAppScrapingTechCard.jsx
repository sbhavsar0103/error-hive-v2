export default function MobileAppScrapingTechCard({ tech }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 lg:p-3 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-5xl lg:text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {tech.logo}
        </div>
        <p className="text-sm lg:text-base font-medium text-gray-300 text-center">
          {tech.name}
        </p>
      </div>
    </div>
  );
}