import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SpecialDeal from "../components/SpecialDeal";
import ProductSort from "../components/ProductSort";
import ProductGrid from "../components/ProductGrid";
import { PRODUCTS } from "../../data/products";

function Home() {
  const tvProducts = PRODUCTS.filter((p) => p.category === "tv");

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentCategory="tv" onCategoryChange={() => {}} />
      <main className="flex flex-1 flex-col">
        <div className="mx-auto mt-5 flex w-full max-w-7xl flex-1 gap-6 px-4">
          <aside className="w-56 shrink-0 lg:w-64">
            <Sidebar products={PRODUCTS} />
            <div className="mt-4">
              <SpecialDeal />
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <ProductSort count={tvProducts.length} />
            <ProductGrid products={tvProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
