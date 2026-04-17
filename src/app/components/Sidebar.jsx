import Button from "./Button";

function Sidebar({ products }) {
  const tvBrands = [...new Set(products.filter((p) => p.category === "tv").map((p) => p.brand))];

  return (
    <div className="flex w-full flex-col gap-5 rounded-md border border-neutral-300/60 px-3 py-3">
      <h2 className="font-medium">Filters</h2>
      <div>
        <h3 className="mb-1 text-sm font-medium">Brand</h3>
        <select
          name="brand"
          id="brand"
          className="w-full rounded-md border border-neutral-300 bg-neutral-100/50 py-1 text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select brand
          </option>
          {tvBrands.map((brand) => (
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
            type="text"
            placeholder="Min"
          />
          <input
            className="w-full max-w-24 rounded-md border border-neutral-300 bg-neutral-100/50 px-2 py-1 text-sm"
            type="text"
            placeholder="Max"
          />
        </div>
        <Button
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
