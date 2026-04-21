import { ShoppingCart, User } from "lucide-react";
import Button from "../components/ui/Button";
import { useAppState } from "../context/AppStateContext";

function Header() {
  const { pageType, setPageType, cart } = useAppState();

  const currentPage = pageType;

  const cartItemCount = Object.values(cart).reduce((s, q) => s + Number(q), 0);

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-neutral-200 bg-white py-3.5">
      <div className="flex w-full max-w-[1280px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span
            onClick={() => setPageType("tv")}
            className="cursor-pointer text-base font-semibold"
          >
            TechStore
          </span>
          <nav className="flex gap-3 text-sm" aria-label="Categories">
            <Button
              type="button"
              className={`cursor-pointer ${currentPage === "tv" ? "font-medium" : ""}`}
              onClick={() => setPageType("tv")}
            >
              TV
            </Button>
            <Button
              type="button"
              className={`cursor-pointer ${currentPage === "phone" ? "font-medium" : ""}`}
              onClick={() => setPageType("phone")}
            >
              Phone
            </Button>
            <Button
              type="button"
              className={`cursor-pointer ${currentPage === "laptop" ? "font-medium" : ""}`}
              onClick={() => setPageType("laptop")}
            >
              Laptop
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            className="relative cursor-pointer p-0.5"
            aria-label={`Cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ""}`}
            onClick={() => setPageType("cart")}
          >
            <ShoppingCart size={18} strokeWidth={2} />
            {cartItemCount > 0 ? (
              <span className="pointer-events-none absolute -right-1 -top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-600 px-0.5 text-[8px] font-semibold leading-none tabular-nums text-white ring-1 ring-white">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </span>
            ) : null}
          </Button>
          <Button
            type="button"
            className="cursor-pointer p-0.5"
            aria-label="Account"
            onClick={() => {}}
          >
            <User size={18} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
