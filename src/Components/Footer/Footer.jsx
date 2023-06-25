import React from "react";

const Footer = () => {
  const leftAngle = "<";
  const rightAngle = " />";
  return (
    <div>
      <div>
        <a className="text-[#b71540] btn btn-ghost normal-case my-6 text-4xl text-center name font-bold ">
          {leftAngle} Hasan Al Banna{rightAngle}
        </a>
      </div>
    </div>
  );
};

export default Footer;
