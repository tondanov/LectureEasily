import { BrowserRouter } from "react-router-dom";

import {
  About,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Programs,
  Testimonials,
} from "./components";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <Programs />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
