import Sidebar from "../layout/Sidebar";
import SpecialDeal from "../features/promo/SpecialDeal";
import ProductSort from "../features/catalog/ProductSort";
import ProductGrid from "../features/catalog/ProductGrid";
import { PRODUCTS } from "../../data/products";
import { useState } from "react";
import { useAppState } from "../context/AppStateContext";

import {
  filterByBrand,
  filterByPriceRange,
  productByCategory,
} from "../../utils/catalog";

function PhoneListing() {
  const { cart, setCart } = useAppState();

  const [draftBrand, setDraftBrand] = useState("");
  const [appliedBrand, setAppliedBrand] = useState("");

  const [sortBy, setSortBy] = useState("low-high");

  const [draftMinPrice, setDraftMinPrice] = useState(null);
  const [draftMaxPrice, setDraftMaxPrice] = useState(5000);
  const [appliedMinPrice, setAppliedMinPrice] = useState(null);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(5000);

  const categoryProducts = productByCategory(PRODUCTS, "phone");
  const visibleProduct = filterByPriceRange(
    filterByBrand(categoryProducts, appliedBrand),
    appliedMinPrice,
    appliedMaxPrice,
  );

  const sortedProduct = [...visibleProduct].sort((a, b) =>
    sortBy === "low-high" ? a.price - b.price : b.price - a.price,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">
        <div className="mx-auto mt-5 flex w-full max-w-7xl flex-1 gap-6 px-4">
          <aside className="w-56 shrink-0 lg:w-64">
            <Sidebar
              products={categoryProducts}
              draftBrand={draftBrand}
              setDraftBrand={setDraftBrand}
              onApplyFilters={() => {
                setAppliedBrand(draftBrand);
                setAppliedMinPrice(draftMinPrice);
                setAppliedMaxPrice(draftMaxPrice);
              }}
              draftMinPrice={draftMinPrice}
              draftMaxPrice={draftMaxPrice}
              setDraftMaxPrice={setDraftMaxPrice}
              setDraftMinPrice={setDraftMinPrice}
            />
            <div className="mt-4">
              <SpecialDeal />
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <ProductSort
              count={sortedProduct.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <ProductGrid
              products={sortedProduct}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PhoneListing;
