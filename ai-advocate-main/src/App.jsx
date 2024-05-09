import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <>
      
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <MyComponent/>
        <Footer />
      </div>
    </>
  );
};

export default App;




