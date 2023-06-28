/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Proficiency from "../../Proficiency/Proficiency";
import Skills from "../../Skills/Skills";
import Particle from "./Particles";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Particle /> */}
      <Header />
      <Banner />
      <Skills />
      {/* <Proficiency /> */}
      <Footer />
    </div>
  );
};

export default Home;
