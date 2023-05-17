/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Header.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  handleToggle = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };
  darkMode(params) {
    document.body.style.backgroundColor = "#130f40";
    document.body.style.color = "#ffffff";
    document.getElementById("menu").style.color = "Black";
  }
  lightMode() {
    document.body.style.color = "#130f40";
    document.body.style.backgroundColor = "";
  }
  render() {
    const leftAngle = "<";
    const rightAngle = " />";
    return (
      <div>
        <div className="navbar bg-base-100">
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
                <li className="common-nav" style={{ color: "#130f40" }}>
                  <a>Skills</a>
                </li>
                <li
                  tabIndex={0}
                  className="common-nav"
                  style={{ color: "#130f40" }}
                >
                  <a className="justify-between">Work Experience</a>
                </li>
                <li className="common-nav" style={{ color: "#130f40" }}>
                  <Link>
                    {" "}
                    <a>Contact Me</a>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl name font-bold text-[#2c3e50]">
              {leftAngle} Hasan Al Banna{rightAngle}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              id="menu"
              className="menu menu-horizontal px-1 font-medium text-2xl"
            >
              <li className="common-nav">
                <a>Skills</a>
              </li>
              <li className="common-nav">
                <a>Work Experience</a>
              </li>
              <li className="common-nav">
                <Link to="/contact">
                  <a>Contact Me</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end text-4xl">
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
