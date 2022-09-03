import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const ProductSlider = () => {
  const product = [
    require("../../assets/bridal1.jpg"),
    require("../../assets/bridal2.jpg"),
    require("../../assets/bridal3.jpg"),
    require("../../assets/fancy1.jpg"),
    require("../../assets/fancy3.jpg"),
    require("../../assets/wedding1.jpeg"),
    require("../../assets/wedding2.jpg"),
    require("../../assets/wedding3.jpg"),
    require("../../assets/kotanji1.jpeg"),
    require("../../assets/bridal2.jpg"),
    require("../../assets/bridal3.jpg"),
    require("../../assets/fancy1.jpg"),
  ];
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {product.map((i, index) => {
          return (
            <div class="card" key={index}>
              <img
                src={i}
                alt="Denim Jeans"
                style={{ width: "100%", height: "50%" }}
              />
              <h1>Nithi Tex Saree</h1>
              <p class="price">Rs.1200</p>
              <p>Bridal Saree</p>
              <p>
                <button className="buy-now">Buy Now</button>
              </p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ProductSlider;
