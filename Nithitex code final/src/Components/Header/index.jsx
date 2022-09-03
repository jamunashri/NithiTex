import React, { useState } from "react";
import { MovingContent  } from '../index'
import "./index.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const sideBarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const searchBar = () => {
    setIsSearchBar(!isSearchBar);
  };
  return (
    <>
      <header class="header">
        <a href="/" class="logo">
          <img src={require('../../assets/nw.JPG')} height="100px" width="200px" />
        </a>

        <form
          action=""
          class={isSearchBar ? "search-form active" : "search-form"}
        >
          <input type="search" id="search-box" placeholder="Search here..." />
          <label for="search-box" class="fas fa-search"></label>
        </form>

        <div class="icons">
          <div
            id="menu-btn"
            class="fas fa-bars"
            onClick={() => sideBarOpen()}
          ></div>
          <div
            id="search-btn"
            class="fas fa-search"
            onClick={() => searchBar()}
          ></div>
          <a href="/login" class="fas fa-user"></a>
          <a href="/cart" class="fas fa-heart"></a>
          <a href="/cart" class="fas fa-shopping-cart"></a>
        </div>
      </header>
      <div class={isSidebarOpen ? "side-bar active" : "side-bar "}>
        <div
          id="close-side-bar"
          class="fas fa-times"
          onClick={() => sideBarOpen()}
        ></div>

        <div class="user">
          <i class="fa fa-user" aria-hidden="true"></i>
          <h3>User</h3>
          <a href="/admin">Log out</a>
        </div>

        <nav class="navbar">
          <a href="/">
            <i class="fas fa-angle-right"></i> Home
          </a>
          <a href="/about">
            <i class="fas fa-angle-right"></i> About
          </a>
          <a href="/products">
            <i class="fas fa-angle-right"></i> Products
          </a>
          <a href="/contact">
            <i class="fas fa-angle-right"></i> Contact
          </a>
          <a href="/login">
            <i class="fas fa-angle-right"></i> Login
          </a>
          <a href="/register">
            <i class="fas fa-angle-right"></i> Register
          </a>
          <a href="/cart">
            <i class="fas fa-angle-right"></i> Cart
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
