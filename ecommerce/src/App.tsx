import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import NavBar from "./components/NavBar";

export const App = () => {
  return (
   <main>
    <NavBar/>
    <MobNavbar/>
    <Hero/>
   </main>
  );
};

export default App;