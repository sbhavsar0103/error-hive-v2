import LLMCategoryButton from "./LLMCategoryButton";

export default function LLMCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <LLMCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
