/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Proficiency from "../../Proficiency/Proficiency";
import Skills from "../../Skills/Skills";
import Particle from "./Particles";

const Home = () => {
  return (
    <div>
      <Particle />
      <Header />
      <Banner />
      <Skills />
      {/* <Proficiency /> */}
    </div>
  );
};

export default Home;
