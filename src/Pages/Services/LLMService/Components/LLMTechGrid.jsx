import LLMTechCard from "./LLMTechCard";

export default function LLMTechGrid({ techs }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6 max-w-4xl mx-auto">
      {techs.map((tech) => (
        <LLMTechCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
}