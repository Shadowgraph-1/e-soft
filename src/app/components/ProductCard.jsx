import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

function ProductCard({ product }) {
  const images = product.images ?? [];
  const hasMultipleImages = images.length > 1;

  const [imageIndex, setImageIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const imageUrl = images[imageIndex];

  const goToPrevious = () => {
    setImageIndex((i) => Math.max(0, i - 1));
  };

  const goToNext = () => {
    setImageIndex((i) => Math.min(images.length - 1, i + 1));
  };

  const addToFavorite = () => {
    setFavorite((f) => !f);
  };

  return (
    <article className="flex flex-col rounded-md shadow-lg">
      <div className="group relative aspect-square w-full overflow-hidden rounded-t-md bg-neutral-100">
        {product.isSpecialOffer ? (
          <span className="absolute left-2 top-2 z-10 rounded-md border border-red-600 bg-red-500 px-1.5 py-0.5 text-xs text-white">
            Special Offer
          </span>
        ) : null}

        {hasMultipleImages ? (
          <>
            {imageIndex > 0 ? (
              <Button
                type="button"
                className="absolute left-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-1 opacity-0 shadow transition-opacity group-hover:opacity-100"
                aria-label="Previous image"
                onClick={goToPrevious}
              >
                <ChevronLeft size={18} />
              </Button>
            ) : null}
            {imageIndex < images.length - 1 ? (
              <Button
                type="button"
                className="absolute right-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-1 opacity-0 shadow transition-opacity group-hover:opacity-100"
                aria-label="Next image"
                onClick={goToNext}
              >
                <ChevronRight size={18} />
              </Button>
            ) : null}
            <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white tabular-nums">
              {imageIndex + 1} / {images.length}
            </div>
          </>
        ) : null}

        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.model}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-sm text-neutral-500">{product.make}</p>
            <h3 className="line-clamp-2 font-semibold leading-snug">
              {product.model}
            </h3>
          </div>
          <Button
            type="button"
            onClick={addToFavorite}
            className={`shrink-0 cursor-pointer ${favorite ? "text-red-500" : "text-neutral-400"}`}
            aria-label="Add to favorites"
          >
            <Heart size={20} />
          </Button>
        </div>

        <p className="text-base font-medium">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </p>

        {cartCount === 0 ? (
          <Button
            type="button"
            className="mt-auto w-full cursor-pointer rounded-md border border-neutral-900 bg-black py-2 text-sm text-white"
            onClick={() => setCartCount(1)}
          >
            Add to cart
          </Button>
        ) : (
          <div className="mt-auto flex items-center justify-between rounded-md gap-5">
            <Button
              type="button"
              className="mt-auto w-full cursor-pointer rounded-md border border-neutral-900 bg-black py-2 text-sm text-white"
              onClick={() => setCartCount((c) => Math.max(0, c - 1))}
            >
              -
            </Button>
            <span className="text-sm flex w-full">{cartCount} in cart</span>
            <Button
              type="button"
              className="mt-auto w-full cursor-pointer rounded-md border border-neutral-900 bg-black py-2 text-sm text-white"
              onClick={() => setCartCount((c) => c + 1)}
            >
              +
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
