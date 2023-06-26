/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import {
  FaBootstrap,
  FaDatabase,
  FaNode,
  FaJsSquare,
  FaFire,
  FaCss3,
  FaCode,
} from "react-icons/fa";
import { DiReact, DiHtml5 } from "react-icons/di";
import Footer from "../Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const AboutMe = () => {
  return (
    <div>
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
      <Header />
      <div className="flex md:flex-row flex-col-reverse">
        <div>
          <div className="container ">
            <h2 className="text-3xl font-bold text-center my-6 text-[#3867d6]">
              What I Do
            </h2>
            <p className="text-2xl font-semibold p-4">
              As a frontend developer, I specialize in building responsive and{" "}
              <br />
              user-friendly web applications. Here are some of the technologies{" "}
              <br />
              and tools I work with:
            </p>
            <div
              className="skills grid md:grid-cols-2 gap-8 px-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="skill">
                <h3>
                  <DiReact className="text-7xl font-bold text-[#61dbfb]" />
                </h3>
                <h3 className="text-2xl font-semibold text-[#61dbfb]">
                  React JS
                </h3>
                <p className="text-2xl font-semibold ">
                  I have extensive experience in developing web applications
                  <br />
                  using React.js. I build reusable and modular components <br />
                  to create interactive and dynamic user interfaces.
                </p>
              </div>
              <div className="skill">
                <FaNode className="text-7xl font-bold text-[#215732]" />
                <h3 className="text-2xl font-semibold text-[#215732]">
                  Express.js
                </h3>
                <p className="text-2xl font-semibold">
                  I utilize Express.js to develop efficient and scalable <br />
                  server-side applications. I create RESTful APIs and
                  <br />
                  handle server-side logic to support frontend functionality.
                </p>
              </div>
              <div className="skill">
                <FaDatabase className="text-7xl font-bold text-[#589636]" />
                <h3 className="text-2xl font-semibold text-[#589636]">
                  MongoDB
                </h3>
                <p className="text-2xl font-semibold">
                  I work with MongoDB to design and implement robust database{" "}
                  <br />
                  solutions. I can create schemas, perform CRUD operations, and{" "}
                  <br />
                  optimize database queries.
                </p>
              </div>
              <div className="skill">
                <div className="flex">
                  <div>
                    {" "}
                    <DiHtml5 className="text-7xl font-bold text-[#f06529]" />{" "}
                  </div>
                  <div>
                    {" "}
                    <FaCss3 className="text-7xl font-bold text-[#2965f1]" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-[#f06529]">
                  HTML & CSS
                </h3>
                <p className="text-2xl font-semibold">
                  I have a strong foundation in HTML and CSS, allowing me to
                  create semantic and visually appealing web pages. I ensure
                  cross-browser compatibility and responsive designs.
                </p>
              </div>
              <div className="skill">
                <FaJsSquare className="text-7xl font-bold text-[#f0db4f]" />
                <h3 className="text-2xl font-semibold text-[#f0db4f]">
                  JavaScript
                </h3>
                <p className="text-2xl font-semibold">
                  JavaScript is one of my core programming languages. I use it{" "}
                  <br />
                  to implement client-side functionality, handle asynchronous{" "}
                  <br />
                  operations, and enhance user interactions.
                </p>
              </div>
              <div className="skill">
                <FaBootstrap className="text-7xl font-bold text-[#0d6efd]" />
                <h3 className="text-2xl font-semibold text-[#0d6efd]">
                  Bootstrap
                </h3>
                <p className="text-2xl font-semibold">
                  I utilize Bootstrap to accelerate development by leveraging{" "}
                  <br />
                  its responsive grid system, pre-built components, and <br />
                  extensive CSS styling options.
                </p>
              </div>
              <div className="skill">
                {/* <FaCode className="text-7xl font-bold text-[#0d6efd]" /> */}
                <img
                  width={80}
                  height={80}
                  src="/tailwind-css-icon.png"
                  alt=""
                />
                <h3 className="text-2xl font-semibold text-[#0d6efd]">
                  Tailwind CSS
                </h3>
                <p className="text-2xl font-semibold">
                  I'm proficient in using Tailwind CSS to rapidly build custom{" "}
                  <br />
                  and modern UIs. I leverage its utility classes to create{" "}
                  <br />
                  efficient and visually stunning designs.
                </p>
              </div>
              <div className="skill">
                <FaFire className="text-7xl font-bold text-[#f0db4f]" />
                <h3 className="text-2xl font-semibold text-[#f0db4f]">
                  Firebase
                </h3>
                <p className="text-2xl font-semibold">
                  I have experience with Firebase, utilizing its authentication,{" "}
                  <br />
                  database, storage, and hosting services to build real-time and{" "}
                  <br />
                  scalable web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mr-6"
          >
            <h1 className="text-4xl font-bold  text-center my-6 ">Education</h1>
            <div
              data-aos="fade-down-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="card w-96 glass mx-auto">
                <figure>
                  <img src="../images-removebg-preview.png" alt="NIT!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-semibold">
                    College : National Institute Of Technology
                  </h2>
                  <h2 className="card-title font-semibold">
                    Degree : Diploma-In-Engineering
                  </h2>
                  <p className="font-semibold">
                    Subject : Computer Science & Technology
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">2019 - Present</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
