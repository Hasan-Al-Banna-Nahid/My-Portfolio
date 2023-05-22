/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiFirebase,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import "./WhatIDo.css";

class WhatIDo extends Component {
  render() {
    return (
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <div
          className="lg:ms-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="../undraw_software_engineer_re_tnjc.png" alt="" />
        </div>
        <div data-aos="zoom-in-up">
          <h2 className="text-5xl font-semibold my-4 ps-4">What I Do?</h2>
          <p className="text-lg font-medium  my-5 ps-4">
            CRAZY Front End DEVELOPER WHO
            <br /> WANTS TO EXPLORE EVERY TECH STACK
          </p>
          <div
            className="technology"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <DiReact className="text-7xl hover:text-[#61dbfb]" />
            </div>
            <div>
              <DiNodejs className="text-7xl hover:text-[#215732]" />
            </div>
            <div>
              <DiMongodb className="text-7xl hover:text-[#589636]" />
            </div>
            <div>
              <DiJsBadge className="text-7xl hover:text-[#f0db4f]" />
            </div>
            <div>
              <DiFirebase className="text-7xl hover:text-[#FFA611]" />
            </div>
            <div>
              <DiHtml5 className="text-7xl hover:text-[#f06529]" />
            </div>
            <div>
              <DiCss3 className="text-7xl hover:text-[#2965f1]" />
            </div>
            <div>
              <FaBootstrap className="text-7xl hover:text-[#0d6efd]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIDo;
