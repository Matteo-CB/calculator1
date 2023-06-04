import React from "react";
import Calculator from "../components/Calculator";
import Result from "../components/Result";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Calculator />
      <Result />
      <Footer />
    </div>
  );
};

export default Home;
