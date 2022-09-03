import React from "react";
import { Banner, Footer, Header,Category , MovingContent, Sliders, ProductSlider,CarouselItem } from "../../Components";

const Home = () => {
  return (
    <>
    <MovingContent />
      <Header />
      <Banner />
      <Category />
      <ProductSlider />
      <ProductSlider/>
      <ProductSlider />
      <ProductSlider/>
      <ProductSlider />
      <ProductSlider/>
      <Footer />
    </>
  );
};
export default Home