import Footer from "./components/Footer";
import Navbarr from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Exploreplace from "./pages/Exploreplace";
import Middle from "./pages/Middle";
import Gallery from "./pages/Gallery";
import Middletwo from "./pages/Middletwo";
import Subscrible from "./pages/Subscrible";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbarr />
        <main className=" px-5 md:px-32">
          <div id="Home">
            <Home />
          </div>
          <div id="Category">
            <Popular />
            <Explore />
            <Exploreplace />
            <Middle />
          </div>
          <div id="Blog">
            <Gallery />
            <Middletwo />
            <Subscrible />
          </div>
        </main>
        <footer id="Aboutus" className=" mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
