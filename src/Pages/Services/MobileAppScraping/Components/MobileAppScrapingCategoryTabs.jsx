import MobileAppScrapingCategoryButton from "./MobileAppScrapingCategoryButton";

export default function MobileAppScrapingCategoryTabs({
  categories,
  selectedCategory,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <MobileAppScrapingCategoryButton
          key={category.id}
          category={category}
          isActive={selectedCategory === category.id}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
