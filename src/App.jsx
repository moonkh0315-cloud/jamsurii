import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import FatigueTest from "./components/FatigueTest"

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <FatigueTest />
      <Footer />
    </div>
  );
}

export default App;