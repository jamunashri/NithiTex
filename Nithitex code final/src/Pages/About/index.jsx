import React from "react";
import '../../Components/Header/index.css'
import {  Footer, Header } from "../../Components";

const About = () => {
  return (
    <>
    <Header />
    <section class="about">
      <div class="image">
        <img src={require('../../assets/Slider2.jpg')} alt="" />
      </div>

      <div class="content">
        <h3>our story</h3>
        <p>
          We are the own manufacture of wedding saree we will be provides direct
          factory's sales of customers.
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
};
export default About;
