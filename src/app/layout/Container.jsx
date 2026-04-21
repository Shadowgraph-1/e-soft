import Header from "./Header";
import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import { AppStateContext } from "../context/AppStateContext";

function Container() {
  const [pageType, setPageType] = useState(() => {
    return localStorage.getItem("pageType") || "tv";
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("pageType", pageType);
  }, [pageType]);

  return (
    <AppStateContext.Provider value={{ pageType, setPageType, cart, setCart }}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <Content />
        </main>
        <Footer />
      </div>
    </AppStateContext.Provider>
  );
}

export default Container;
