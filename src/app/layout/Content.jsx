import TvListing from "../pages/TvListing";
import PhoneListing from "../pages/PhoneListing";
import LaptopListing from "../pages/LaptopListing";
import Cart from "../components/Cart";
import { useAppState } from "../context/AppStateContext";

const Content = () => {
  const { pageType } = useAppState();

  return (
    <>
      {pageType === "tv" && <TvListing />}
      {pageType === "phone" && <PhoneListing />}
      {pageType === "laptop" && <LaptopListing />}
      {pageType === "cart" && <Cart />}
    </>
  );
};

export default Content;
