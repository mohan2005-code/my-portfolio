import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundEffects from "./components/BackgroundEffects";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative bg-[#0B1026] text-white scroll-smooth overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Certificates />
      <Contact />
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;