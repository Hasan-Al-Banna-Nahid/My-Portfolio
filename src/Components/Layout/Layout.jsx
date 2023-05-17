/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import WhatIDo from "../What I Do/WhatIDo";
import Proficiency from "../Proficiency/Proficiency";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <WhatIDo />
        <Proficiency />
      </div>
    );
  }
}

export default Layout;
