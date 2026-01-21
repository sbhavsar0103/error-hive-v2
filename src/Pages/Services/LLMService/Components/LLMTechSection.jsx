import { useState } from "react";
import { categories, techLogos } from "./LLMTechData";
import LLMCategoryTabs from "./LLMCategoryTabs";
import LLMTechGrid from "./LLMTechGrid";

export default function LLMTechSection() {
  const [selectedCategory, setSelectedCategory] = useState("data");

  return (
    <div className="bg-[#060010] text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
            <span className="text-amber-500 text-sm font-medium">Tech</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
            Innovating with Advanced Tech
          </h1>

          <LLMCategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="relative h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-12">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md" />
          </div>
        </div>

        <LLMTechGrid techs={techLogos[selectedCategory] || []} />

      </div>
    </div>
  );
}
