/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Contact.css";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const MySwal = withReactContent(Swal);
class Contact extends Component {
  render() {
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

        <div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:IamNahid591998@gmail.com"
                >
                  <FaMailBulk />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
