/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Banner.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  // const skills = [
  //   "React Js",
  //   "Express JS",
  //   "JavaScript",
  //   "Firebase",
  //   "MongoDB",
  //   "TailwindCSS",
  //   "Bootstrap",
  //   "HTML 5",
  //   "CSS 3",
  // ];
  // let index = 0;
  // function showNextSkill() {
  //   const slider = document.getElementById("slider");
  //   slider.innerHTML = skills[index];
  //   index = (index + 1) % skills.length;
  // }
  // setInterval(showNextSkill, 1300);
  // const intro = document.getElementById("intro");

  return (
    <div className="lg:mx-16 banner">
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
      <div className="lg:flex justify-between justify-center-center p-8 ">
        <div
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mx-auto"
        >
          <h3 className="text-4xl font-bold">
            Hi EveryOne,👋 I'm <br />{" "}
            <span className="common ms-6 name text-[#c44569]">
              Hasan Al Banna
            </span>
          </h3>
          <p id="intro" className="text-3xl  font-bold">
            A passionate
            <TypeAnimation
              sequence={[
                " Software Engineer 🚀",
                1000,
                " Developer 🚀",
                1000,
                " MERN Stack Engineer🚀",
                1000,
                " Front End  Engineer🚀",
                1000,
                " Back End  Engineer🚀",
                1000,
                " Full Stack Engineer 🚀",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                padding: "8px",
                color: "#7158e2",
                fontSize: "2.5rem",
                display: "inline-block",
              }}
              repeat={Infinity}
            />{" "}
            {/* Software Engineer 🚀  */}
            <br />
            having an experience of building Modern Web Applications with some
            cool Libraries and Frameworks.
          </p>
          <div id="slider" className="text-[#c0392b] text-6xl font-bold">
            <div>
              <TypeAnimation
                sequence={[
                  "React Js",
                  1000,
                  "Express JS",
                  1000,
                  "Next JS",
                  1000,
                  "JavaScript",
                  1000,
                  "TypeScript",
                  1000,
                  "Firebase",
                  1000,
                  "MongoDB",
                  1000,
                  "TailwindCSS",
                  1000,
                  "Bootstrap",
                  1000,
                  "HTML 5",
                  1000,
                  "CSS 3",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:IamNahid591998@gmail.com"
              >
                <FaMailBulk />
              </a>
            </div>
          </div>
          <br />
          <div className="md:flex grid grid-cols-2 gap-2">
            <div className="mx-2 text-4xl">
              <Link to="/contact">
                <button className="btn btn-outline btn-accent">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="text-4xl mx-2 ">
              <a
                href="https://drive.google.com/file/d/1LOkGMUMTevWVEAOsEj9RrJjrDSj4lwXG/view?usp=sharing"
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
          <div className="my-2">
            {/* <img src="../undraw_feeling_proud_qne1.png" alt="" /> */}
            <img
              src="./76616-programming-unscreen.gif"
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
