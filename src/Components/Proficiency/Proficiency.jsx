/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Proficiency.css";

class Proficiency extends Component {
  render() {
    return (
      <div>
        <h2 className="text-4xl font-bold  text-center my-8">Proficiency</h2>
        <div className="proficiency">
          <div>
            <h1 className="text-2xl font-semibold">
              HTML :{" "}
              <progress
                className="progress progress-warning w-56"
                value="90"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              CSS :{" "}
              <progress
                className="progress progress-info w-56"
                value="80"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              JavaScript :{" "}
              <progress
                className="progress progress-success w-56"
                value="60"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              React JS :{" "}
              <progress
                className="progress progress-accent w-56"
                value="70"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Tailwind CSS :{" "}
              <progress
                className="progress progress-secondary w-56"
                value="70"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Bootstrap :{" "}
              <progress
                className="progress progress-primary w-56"
                value="90"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Express JS :{" "}
              <progress
                className="progress w-56"
                value="40"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              MongoDB :{" "}
              <progress
                className="progress progress-accent w-56"
                value="40"
                max="100"
              ></progress>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Firebase :{" "}
              <progress
                className="progress progress-info w-56"
                value="90"
                max="100"
              ></progress>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Proficiency;
