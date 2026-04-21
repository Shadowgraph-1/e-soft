export function productByCategory(product, category) {
    return product.filter((p) => p.category === category);
}

export function filterByBrand(product, brand) {
    if (!brand) return product;
    return product.filter((p) => p.brand === brand);
}

export function filterByPriceRange(products, min, max) {
    return products.filter((p) => {
      if (min != null && min !== "" && p.price < Number(min)) return false;
      if (max != null && max !== "" && p.price > Number(max)) return false;
      return true;
    });
  }