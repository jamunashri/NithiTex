import React from "react";
import '../Header/index.css'

const Banner = () => {
  return (
    <section class="banner">
      <div class="box-container">
        <a href="#" class="box">
          <img src={require('../../assets/Slider1.jpg')} alt="" />
          {/* <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
          </div> */}
        </a>

        <a href="#" class="box">
          <img src={require('../../assets/Slider2.jpg')} alt="" />
        </a>

        <a href="#" class="box">
          <img src={require('../../assets/Slider3.jpg')} alt="" />
        </a>
      </div>
    </section>
  );
};
export default Banner