import { ICategory } from "@/app/interfaces/interface";

interface FiltersProps {
  categories: ICategory[];
  selectedCategory: string;
  sortOrder: string;
  onCategoryChange: (category: string) => void;
  onSortOrderChange: (order: string) => void;
}

const Filters = ({
  categories,
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortOrderChange,
}: FiltersProps) => {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Sort Order */}
      <select value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
