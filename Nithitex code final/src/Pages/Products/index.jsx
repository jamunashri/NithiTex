import axios from "axios";
import React, { useState, useEffect } from "react";
import { Category, Footer, Header } from "../../Components";
import "../../Components/Header/index.css";

const Products = () => {
  const data = [
    {
      image: require("../../assets/wedding2.jpg"),
      title: "Bridal Soft skill saree",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/wedding3.jpg"),
      title: "PICK AND PICK SILK SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/bridal3.jpg"),
      title: "BRIDAL SOFT SILKS SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/wedding3.jpg"),
      title: "KORVAI KOTTANJI",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/wedding3.jpg"),
      title: "KANJIVARAM ARTS SILKS SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/fancy3.jpg"),
      title: "VASTHRAKALA SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/fancy3.jpg"),
      title: "VASTHRAKALA SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/bridal1.jpg"),
      title: "BRIDAL SOFT SILKS SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
    {
      image: require("../../assets/bridal2.jpg"),
      title: "BRIDAL SOFT SILKS SAREE",
      oPrice: "Rs.2000",
      newPrice: "Rs.2500",
    },
  ];
  useEffect(() => {
    console.log(new URLSearchParams(window.location.search),window.location.search, "categoryID");
    axios.post(
      `http://api.nidhitex.com/api/Category/LoadCategoryList?CategoryID=${1}&WildcardSearch=Wedding Sarees`
    );
  }, []);

  return (
    <>
      <Header />
      <section class="products">
        <h1 class="heading">
          featured <span>products</span>
        </h1>
        <div class="box-container">
          {data.map((item, key) => {
            return (
              <div class="box" key={key}>
                <div class="image">
                  <img src={item.image} class="main-img" alt="" />
                  <img src={item.image} class="hover-img" alt="" />
                  <div class="icons">
                    <a href="/cart" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-search-plus"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <h3>{item.title}</h3>
                  <div class="price">
                    {item.oPrice} <span>{item.newPrice}</span>
                  </div>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Products;
