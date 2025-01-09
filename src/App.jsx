import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--color-dark)] text-[var(--color-light)]">
      <Navigation />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
