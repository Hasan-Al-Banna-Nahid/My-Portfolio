/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Contact.css";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "../Footer/Footer";

const MySwal = withReactContent(Swal);
class Contact extends Component {
  handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = parseInt(form.phone.value);
    const message = form.message.value;
    const data = {
      name,
      email,
      phone,
      message,
    };
    fetch("https://portfolio-six-opal.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();

        MySwal.fire(
          "Good job!",
          "Your Message Has Been Successfully sent to Hasan!",
          "success"
        );
      });
  };
  render() {
    return (
      <div>
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
                <a href="mailto:IamNahid591998@gmail.com">
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
