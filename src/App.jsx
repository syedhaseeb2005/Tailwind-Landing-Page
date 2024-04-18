import "./App.css";
import Footer from "./Component/Footer";
// import FeaturedSection from "./Component/FeaturedSection";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import Testimonials from "./Component/Testimonials";
import WorkFlow from "./Component/WorkFlow";

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-8">
    <HeroSection/>
    {/* <FeaturedSection/> */}
    <WorkFlow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
