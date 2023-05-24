/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Contact.css";

class Contact extends Component {
  render() {
    const leftAngle = "<";
    const rightAngle = " />";
    return (
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <h2 className="text-center text-4xl my-6 font-bold ">Contact Me</h2>
        <h2 className="text-2xl font-semibold text-center">
          Contact Me ☎️ DISCUSS A PROJECT OR JUST WANT TO SAY HI? <br /> MY
          INBOX IS OPEN FOR ALL. <br /> +8801896085259 <br />{" "}
          IamNahid591998@gmail.com
        </h2>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=" flex text-6xl social-icons"
        >
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
        <div>
          <a className="btn btn-ghost normal-case my-6 text-4xl text-center name font-bold ">
            {leftAngle} Hasan Al Banna{rightAngle}
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
