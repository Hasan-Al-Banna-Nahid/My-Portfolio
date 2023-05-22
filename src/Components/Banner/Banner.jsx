/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Banner.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Header from "../Header/Header";

class Banner extends Component {
  render() {
    const skills = [
      "React Js",
      "Express JS",
      "JavaScript",
      "Firebase",
      "MongoDB",
      "TailwindCSS",
      "Bootstrap",
      "HTML 5",
      "CSS 3",
    ];
    let index = 0;
    function showNextSkill() {
      const slider = document.getElementById("slider");
      slider.textContent = skills[index];
      index = (index + 1) % skills.length;
    }
    setInterval(showNextSkill, 1300);
    const intro = document.getElementById("intro");

    return (
      <div className="lg:mx-16">
        <div className="lg:flex justify-between justify-center-center p-8 ">
          <div
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h3 className="text-4xl font-semibold">
              Hi EveryOne, I'm <br />{" "}
              <span className="common ms-6 name">Hasan Al Banna</span>
            </h3>
            <p id="intro" className="text-2xl  font-medium">
              A passionate Front End Software Developer 🚀 <br /> having an
              experience of building Modern Web applications with some cool
              libraries and frameworks.
            </p>
            <div id="slider" className="text-[#c0392b] text-6xl font-bold">
              <div>{showNextSkill}</div>
            </div>
            <br />
            <div className=" flex text-6xl">
              <div className="mx-8 hover:text-black">
                <a
                  href="https://github.com/Hasan-Al-Banna-Nahid"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="mx-8 hover:text-[#0072b1]">
                <a
                  href="https://www.linkedin.com/in/hasan-al-banna-84390b276/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="mx-8 hover:text-[#F4B400]">
                <a href="mailto:IamNahid591998@gmail.com">
                  <FaMailBulk />
                </a>
              </div>
            </div>
            <br />
            <div className="flex ">
              <div className="mx-6 text-4xl">
                <a href="">
                  <button className="btn btn-outline btn-accent">
                    Contact Me
                  </button>
                </a>
              </div>
              <div className="text-4xl ">
                <a
                  href="https://drive.google.com/file/d/1dMqqXmnDqiwGpw3TPGMLg0mYNL2_jAlI/view?usp=share_link"
                  target="blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-outline btn-secondary w-28">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              className="svg-container"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              <img src="../undraw_feeling_proud_qne1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
