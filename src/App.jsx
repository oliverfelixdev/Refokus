import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--color-dark)] text-[var(--color-light)]">
      <Navigation />
      <Home />
      <Products />
      {/* <Button /> */}
    </div>
  );
};

export default App;
