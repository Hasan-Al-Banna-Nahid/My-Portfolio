/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default Layout;
