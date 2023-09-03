import Banner from "./components/Banner";
import Category from "./components/Category";
import FeatureSectionsPizza from "./components/FeatureSectionsPizza";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NavBar from "./components/NavBar";

export const App = () => {
  return (
    <main>
      <NavBar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeatureSectionsPizza/>
      <Banner/>
    </main>
  );
};

export default App;