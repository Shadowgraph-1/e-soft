import { ShoppingCart, User } from "lucide-react";
import Button from "./Button";

function Header({ currentCategory = "tv", onCategoryChange }) {
  const handleCategory = (category) => {
    if (typeof onCategoryChange === "function") {
      onCategoryChange(category);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-neutral-200 bg-white py-5">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <a href="/tv" className="text-lg font-semibold cursor-pointer">
            TechStore
          </a>
          <nav className="flex gap-4" aria-label="Categories">
            <Button
              type="button"
              className={`cursor-pointer ${currentCategory === "tv" ? "font-medium" : ""}`}
              onClick={() => handleCategory("tv")}
            >
              TV
            </Button>
            <Button
              type="button"
              className={`cursor-pointer ${currentCategory === "phone" ? "font-medium" : ""}`}
              onClick={() => handleCategory("phone")}
            >
              Phone
            </Button>
            <Button
              type="button"
              className={`cursor-pointer ${currentCategory === "laptop" ? "font-medium" : ""}`}
              onClick={() => handleCategory("laptop")}
            >
              Laptop
            </Button>
          </nav>
        </div>
        <div className="flex gap-5">
          <Button type="button" className="cursor-pointer" aria-label="Cart">
            <ShoppingCart size={20} />
          </Button>
          <Button type="button" className="cursor-pointer" aria-label="Account">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
