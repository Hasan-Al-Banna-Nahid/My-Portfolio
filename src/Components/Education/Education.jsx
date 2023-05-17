/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <h1 className="text-4xl font-bold text-[#130f40] text-center my-6">
          Education
        </h1>
        <div>
          <div className="card w-96 glass mx-auto">
            <figure>
              <img
                src="../../../public/images-removebg-preview.png"
                alt="NIT!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">
                National Institute Of Technology
              </h2>
              <p className="font-semibold">Computer Science & Technology</p>
              <div className="card-actions">
                <button className="btn btn-primary">2019 - Present</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;