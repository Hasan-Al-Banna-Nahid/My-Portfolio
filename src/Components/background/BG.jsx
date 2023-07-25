import React from "react";
import LazyLoad from "react-lazy-load";

const BG = () => {
  return (
    <div>
      <LazyLoad>
        <img src="../../../public/particles.gif" alt="" />
      </LazyLoad>
    </div>
  );
};

export default BG;
