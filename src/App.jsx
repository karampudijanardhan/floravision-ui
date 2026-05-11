import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CustomerReviews from "./sections/CustomerReviews";
import O2Section from "./sections/O2Section";
import TopSellingplants from "./sections/TopSellingPlants";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopSellingplants />
      <CustomerReviews />
      <O2Section />
      <Footer/>
    </div>
  );
}

export default App;