import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.09 }}>
      <div className="w-full min-h-screen bg-[var(--color-dark)] text-[var(--color-light)]">
        <Navigation />
        <Home />
        <Products />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
