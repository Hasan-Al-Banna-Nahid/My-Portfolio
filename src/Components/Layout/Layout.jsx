/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import WhatIDo from "../What I Do/WhatIDo";
import Proficiency from "../Proficiency/Proficiency";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <WhatIDo />
        <Proficiency />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default Layout;
