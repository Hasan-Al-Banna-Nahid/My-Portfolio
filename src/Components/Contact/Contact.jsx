/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./Contact.css";
import Header from "../Header/Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
    fetch("https://personal-one-ochre.vercel.app/user", {
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
    const leftAngle = "<";
    const rightAngle = " />";
    return (
      <div>
        <Header />
        <div>
          <form
            onSubmit={this.handleForm}
            className="hero min-h-screen bg-base-200"
          >
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h2 className="text-1xl font-bold text-center text-[#c44569]">
                    Want To Some Chat With Me!
                  </h2>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      name="phone"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Your Message</span>
                    </label>
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Say Something!"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
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
            <div>
              <a className="btn btn-ghost normal-case my-6 text-4xl text-center name font-bold ">
                {leftAngle} Hasan Al Banna{rightAngle}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
