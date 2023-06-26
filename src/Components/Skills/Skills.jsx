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
import AnimatedCursor from "react-animated-cursor";

class Skills extends Component {
  render() {
    return (
      <div className="my-6 grid lg:grid-cols-2 lg:gap-4" id="skills">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
        <div
          className="lg:ms-32"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* <img src="../undraw_software_engineer_re_tnjc.png" alt="" /> */}
          <img src="../undraw_feeling_proud_qne1.png" alt="" />
        </div>
        <div data-aos="zoom-in-up">
          <h2 className="text-5xl font-semibold my-4 ps-4">Skills?</h2>
          <p className="text-lg font-bold  my-5 ps-4">
            Passionate Front End Developer Who
            <br /> Wants To Explore Every Tech Stack
          </p>
          <div
            className="technology"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <DiReact className="text-7xl hover:text-[#61dbfb] " />
              <h3 className="font-bold">React JS</h3>
            </div>
            <div>
              <FaNode className="text-7xl hover:text-[#215732]" />
              <h3 className="font-bold">Express JS</h3>
            </div>
            <div>
              <FaDatabase className="text-7xl hover:text-[#589636]" />
              <h3 className="font-bold">Mongo DB</h3>
            </div>
            <div>
              <FaJsSquare className="text-7xl hover:text-[#f0db4f]" />
              <h3 className="font-bold">JavaScript</h3>
            </div>
            <div>
              <FaFire className="text-7xl hover:text-[#f0db4f]" />
              <h3 className="font-bold">Firebase</h3>
            </div>
            <div>
              <DiHtml5 className="text-7xl hover:text-[#f06529]" />
              <h3 className="font-bold ms-2">HTML</h3>
            </div>
            <div>
              <FaCss3 className="text-7xl hover:text-[#2965f1]" />
              <h3 className="font-bold ms-2">CSS</h3>
            </div>
            <div>
              <FaBootstrap className="text-7xl hover:text-[#0d6efd]" />
              <h3 className="font-bold">Bootstrap</h3>
            </div>
            <div>
              <img width={80} height={80} src="/t.png" alt="" />
              <h3 className="font-bold">Tailwind</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
