import { Trash2 } from "lucide-react";
import { PRODUCTS } from "../../data/products";
import Button from "./ui/Button";
import { useAppState } from "../context/AppStateContext";
import { addOne, removeLine, removeOne } from "../../utils/cart";

const TAX = 0.08;

const round2 = (n) => Math.round((Number(n) + Number.EPSILON) * 100) / 100;

function Cart() {
  const { cart, setCart, setPageType } = useAppState();

  const subtotalRaw = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = PRODUCTS.find((p) => String(p.id) === String(id));
    return product ? sum + product.price * qty : sum;
  }, 0);

  const subtotal = round2(subtotalRaw);
  const taxAmount = round2(subtotal * TAX);
  const orderTotal = round2(subtotal + taxAmount);

  const moneySummary = (n) =>
    round2(n).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-5 md:py-6">
      {Object.keys(cart).length === 0 ? (
        <div className="flex min-h-[min(60vh,22rem)] flex-col items-center justify-center gap-6 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/90 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-neutral-900">
            Your cart is empty
          </p>
          <Button
            type="button"
            onClick={() => setPageType("tv")}
            className="cursor-pointer rounded-lg border border-neutral-900 bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-900"
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="text-lg font-semibold tracking-tight text-neutral-900">
              Shopping cart
            </h1>
            <Button
              onClick={() => setCart({})}
              type="button"
              className="cursor-pointer rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-50"
            >
              Clear cart
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            {Object.entries(cart).map(([id, qty]) => {
              const product = PRODUCTS.find((p) => String(p.id) === String(id));
              if (!product) return null;
              return (
                <div
                  key={id}
                  className="flex flex-wrap items-center gap-3 border-b border-neutral-100 px-3 py-3 last:border-b-0 sm:gap-4 sm:px-4"
                >
                  <div className="flex min-w-0 flex-1 gap-2.5">
                    <img
                      src={product.images[0]}
                      alt={product.brand}
                      className="h-14 w-14 shrink-0 rounded-md object-cover"
                    />
                    <div className="flex min-w-0 flex-col justify-center gap-0.5">
                      <span className="text-xs font-semibold text-neutral-900">
                        {product.brand}
                      </span>
                      <span className="line-clamp-2 text-xs text-neutral-600">
                        {product.model}
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto flex shrink-0 flex-wrap items-center justify-end gap-3 sm:gap-4">
                    <span className="text-sm font-semibold tabular-nums tracking-tight text-neutral-900">
                      {(product.price * qty).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      })}
                    </span>
                    <div className="inline-flex items-center gap-0.5 rounded-md border border-neutral-200 bg-neutral-50/80 p-px">
                      <button
                        onClick={() =>
                          setCart((prev) => removeOne(prev, product.id))
                        }
                        type="button"
                        aria-label="Decrease quantity"
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900"
                      >
                        <span className="text-sm leading-none">−</span>
                      </button>
                      <span className="min-w-8 px-0.5 text-center text-xs font-medium tabular-nums text-neutral-800">
                        {qty}
                      </span>
                      <button
                        onClick={() =>
                          setCart((prev) => addOne(prev, product.id))
                        }
                        type="button"
                        aria-label="Increase quantity"
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded text-neutral-500 transition-colors hover:bg-white hover:text-neutral-900"
                      >
                        <span className="text-sm leading-none">+</span>
                      </button>
                      <button
                        onClick={() =>
                          setCart((prev) => removeLine(prev, product.id))
                        }
                        type="button"
                        aria-label="Remove item"
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded text-neutral-400 transition-colors hover:bg-white hover:text-red-600"
                      >
                        <Trash2 size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ml-auto w-full max-w-xs rounded-lg border border-neutral-200 bg-neutral-50/50 px-4 py-3">
            <h2 className="mb-2 text-[11px] font-medium uppercase tracking-wide text-neutral-500">
              Summary
            </h2>
            <dl className="space-y-1.5 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-600">Subtotal</dt>
                <dd className="tabular-nums font-medium text-neutral-900">
                  {moneySummary(subtotal)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-600">Tax (8%)</dt>
                <dd className="tabular-nums font-medium text-neutral-900">
                  {moneySummary(taxAmount)}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-neutral-500">
                <dt>Shipping</dt>
                <dd className="text-right text-[11px]">
                  Calculated at checkout
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-neutral-200 pt-2 text-sm">
                <dt className="font-semibold text-neutral-900">Total</dt>
                <dd className="font-semibold tabular-nums text-neutral-900">
                  {moneySummary(orderTotal)}
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-1 flex flex-col gap-2 border-t border-neutral-200 pt-3 sm:flex-row sm:justify-end sm:gap-2">
            <Button
              type="button"
              onClick={() => setPageType("tv")}
              className="w-full cursor-pointer rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50 sm:w-auto"
            >
              Back to Shopping
            </Button>
            <Button
              type="button"
              className="w-full cursor-pointer rounded-md border border-neutral-900 bg-black px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-900 sm:w-auto"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
