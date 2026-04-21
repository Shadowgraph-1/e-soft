import Button from "../components/ui/Button";

function Sidebar({
  products,
  draftBrand,
  setDraftBrand,
  onApplyFilters,
  draftMinPrice,
  draftMaxPrice,
  setDraftMinPrice,
  setDraftMaxPrice,
}) {
  const allBrands = [
    ...new Set(products.map((p) => p.brand).filter(Boolean)),
  ].sort();

  return (
    <div className="flex w-full flex-col gap-5 rounded-md border border-neutral-300/60 px-3 py-3">
      <h2 className="font-medium">Filters</h2>
      <div>
        <h3 className="mb-1 text-sm font-medium">Brand</h3>
        <select
          name="brand"
          id="brand"
          className="w-full rounded-md border border-neutral-300 bg-neutral-100/50 py-1 text-sm"
          value={draftBrand}
          onChange={(e) => setDraftBrand(e.target.value)}
        >
          <option value="">All brands</option>
          {allBrands.map((brand) => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span className="text-sm font-medium">Price</span>
        <div className="mt-1 flex gap-10">
          <input
            className="w-full max-w-24 rounded-md border border-neutral-300 bg-neutral-100/50 px-2 py-1 text-sm"
            type="number"
            value={draftMinPrice ?? ""}
            onChange={(e) => setDraftMinPrice(e.target.value)}
            placeholder="0"
          />
          <input
            className="w-full max-w-24 rounded-md border border-neutral-300 bg-neutral-100/50 px-2 py-1 text-sm"
            type="number"
            max={5000}
            value={draftMaxPrice ?? ""}
            onChange={(e) => {
              const v = e.target.valueAsNumber;
              if (Number.isNaN(v)) {
                setDraftMaxPrice("");
                return;
              }
              setDraftMaxPrice(String(Math.min(5000, Math.max(0, v))));
            }}
            placeholder="5000"
          />
        </div>
        <Button
          onClick={onApplyFilters}
          type="button"
          className="mt-3 w-full cursor-pointer rounded-md border border-neutral-900 bg-black py-1.5 text-sm text-white"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
