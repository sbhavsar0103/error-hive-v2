import DataScienceStepListItem from "./DataScienceStepListItem";

export default function DataScienceStepCard({ number, title, items, delay }) {
  return (
    <div
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards ${delay}s`,
        opacity: 0,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/0 rounded-2xl transition-all duration-500"></div>

      <div className="relative space-y-4">
        <span className="text-xs font-semibold text-amber-500 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
          Step {number}
        </span>

        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <DataScienceStepListItem key={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}