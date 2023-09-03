import Banner from "./components/Banner";
import Category from "./components/Category";
import FeatureSectionsPizza from "./components/FeatureSectionsPizza";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

export const App = () => {
  return (
    <main>
      <NavBar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeatureSectionsPizza/>
      <Banner/>
      <Newsletter/>
      <Footer/>
    </main>
  );
};

export default App;