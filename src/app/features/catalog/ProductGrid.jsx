import ProductCard from "./ProductCard";

function ProductGrid({ products, cart, setCart }) {
  if (!products.length) {
    return <p className="text-neutral-500">No products.</p>;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
