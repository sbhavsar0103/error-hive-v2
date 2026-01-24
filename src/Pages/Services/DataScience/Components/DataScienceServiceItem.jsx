export default function DataScienceServiceItem({ service, isSelected, onClick }) {
  const IconComponent = service.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
        isSelected
          ? "bg-amber-500 text-[#060010] shadow-lg shadow-amber-500/30 scale-[1.02]"
          : "bg-white/5 text-white hover:bg-white/10 hover:scale-[1.01]"
      }`}
    >
      <div className="flex items-center gap-3">
        <IconComponent
          className={`w-5 h-5 flex-shrink-0 ${
            isSelected ? "text-[#060010]" : "text-amber-500"
          }`}
        />
        <span className="font-medium text-base">{service.title}</span>
      </div>
    </button>
  );
}