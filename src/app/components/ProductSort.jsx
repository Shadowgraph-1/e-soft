function ProductSort({ count }) {
  return (
    <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-neutral-600">
        {count} products
      </p>
      <label className="flex items-center gap-2 text-sm">
        <span>Sort by:</span>
        <select
          name="sort"
          id="sort"
          className="max-w-xs rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-sm"
          defaultValue="high-low"
        >
          <option value="high-low">Price: High to Low</option>
          <option value="low-high">Price: Low to High</option>
        </select>
      </label>
    </div>
  );
}

export default ProductSort;
