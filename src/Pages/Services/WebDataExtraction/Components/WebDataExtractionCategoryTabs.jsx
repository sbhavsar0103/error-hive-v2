import WebDataExtractionCategoryButton from "./WebDataExtractionCategoryButton";

export default function WebDataExtractionCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <WebDataExtractionCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
