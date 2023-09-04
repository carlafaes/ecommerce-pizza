import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Category from "./components/Category";
import FeatureSectionsPizza from "./components/FeatureSectionsPizza";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";

export const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContextProvider>
    <main>
      <NavBar setShowCart={setShowCart}/>
      <MobNavbar setShowCart={setShowCart}/>
      <Hero />
      <Category />
      <FeatureSectionsPizza/>
      <Banner/>
      <Newsletter/>
      <Footer/>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
    </main>
    </CartContextProvider>
  );
};

export default App;