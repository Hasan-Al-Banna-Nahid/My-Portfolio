/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Header.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isActive: false,
    };
  }
  handleToggle = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  darkMode() {
    document.body.style.backgroundColor = "#130f40";
    document.body.style.color = "#ffffff";
    document.getElementById("menu").style.color = "Black";
  }
  lightMode() {
    document.body.style.color = "#130f40";
    document.body.style.backgroundColor = "#ECF0F3";
  }
  render() {
    const leftAngle = "<";
    const rightAngle = " />";
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
        <div className="navbar z-50 bg-base-300 text-[#130f40] font-bold">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  style={{ color: "#130f40" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  className="common-nav hover:underline hover:text-[#8854d0]"
                  style={{ color: "#130f40" }}
                >
                  <Link to="/projects">Projects</Link>
                </li>
                {/* <li
                  tabIndex={0}
                  className="common-nav"
                  style={{ color: "#130f40" }}
                >
                  <Link to="/Experience">
                    {" "}
                    <a> Experience</a>
                  </Link>
                </li> */}
                <li
                  className="common-nav hover:underline hover:text-[#8854d0]"
                  style={{ color: "#130f40" }}
                >
                  <Link to="/contact">
                    <a>Contact Me</a>
                  </Link>
                </li>
                <li
                  className="common-nav hover:underline hover:text-[#8854d0]"
                  style={{ color: "#130f40" }}
                >
                  <Link to="/about">
                    <a>About Me</a>
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              className="text-[#b71540] z-50 btn btn-ghost normal-case text-2xl name font-bold "
            >
              {leftAngle} Hasan Al Banna{rightAngle}
            </Link>
          </div>
          <div data-aos="zoom-in-down" className="navbar-center hidden lg:flex">
            <ul
              id="menu"
              className="menu menu-horizontal px-4 ms-12 font-semibold text-2xl"
            >
              <li className="common-nav hover:underline hover:text-[#8854d0]">
                {" "}
                <Link to="/projects">Projects</Link>
              </li>
              {/* <li className="common-nav hover:underline hover:text-[#8854d0]">
                <Link to="/Experience">
                  {" "}
                  <a> Experience</a>
                </Link>
              </li> */}
              <li className="common-nav hover:underline hover:text-[#8854d0]">
                <Link to="/contact">
                  <a>Contact Me</a>
                </Link>
              </li>
              <li className="common-nav hover:underline hover:text-[#8854d0]">
                <Link to="/about">
                  <a>About Me</a>
                </Link>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-out-left" className="navbar-end text-4xl">
            <div onClick={this.handleToggle}>
              {!this.state.isClicked ? (
                <FaToggleOff className="toggleOff" onClick={this.darkMode} />
              ) : (
                <FaToggleOn className="toggleOn" onClick={this.lightMode} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
