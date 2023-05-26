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
import {
  FaBootstrap,
  FaDatabase,
  FaNode,
  FaJsSquare,
  FaFire,
  FaCss3,
} from "react-icons/fa";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="grid lg:grid-cols-2 lg:gap-4" id="skills">
        <div
          className="lg:ms-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="../undraw_software_engineer_re_tnjc.png" alt="" />
        </div>
        <div data-aos="zoom-in-up">
          <h2 className="text-5xl font-semibold my-4 ps-4">Skills?</h2>
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
              <DiReact className="text-7xl hover:text-[#61dbfb] " />
              <h3 className="font-semibold">React JS</h3>
            </div>
            <div>
              <FaNode className="text-7xl hover:text-[#215732]" />
              <h3 className="font-semibold">Express JS</h3>
            </div>
            <div>
              <FaDatabase className="text-7xl hover:text-[#589636]" />
              <h3 className="font-semibold">Mongo DB</h3>
            </div>
            <div>
              <FaJsSquare className="text-7xl hover:text-[#f0db4f]" />
              <h3 className="font-semibold">JavaScript</h3>
            </div>
            <div>
              <FaFire className="text-7xl hover:text-[#f0db4f]" />
              <h3 className="font-semibold">Firebase</h3>
            </div>
            <div>
              <DiHtml5 className="text-7xl hover:text-[#f06529]" />
              <h3 className="font-semibold ms-2">HTML</h3>
            </div>
            <div>
              <FaCss3 className="text-7xl hover:text-[#2965f1]" />
              <h3 className="font-semibold ms-2">CSS</h3>
            </div>
            <div>
              <FaBootstrap className="text-7xl hover:text-[#0d6efd]" />
              <h3 className="font-semibold">Bootstrap</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
