import React from "react";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
