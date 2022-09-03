import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';

const CarouselItem  = () => {
return (

    <section class="home">
    
        <div class="swiper home-slider">
    
            <div class="swiper-wrapper">
    
            <div class="swiper-slide slide">
                <div class="image">
                    <img src="images/home-img-1.jpg" alt="" />
                </div>
                <div class="content">
                    <span>upto 50% off</span>
                    <h3>smartphones</h3>
                    <a href="#" class="btn">shop now</a>
                </div>
            </div>
    
            <div class="swiper-slide slide">
                <div class="image">
                    <img src="images/home-img-2.jpg" alt="" />
                </div>
                <div class="content">
                    <span>upto 50% off</span>
                    <h3>smartwatch</h3>
                    <a href="#" class="btn">shop now</a>
                </div>
            </div>
    
            <div class="swiper-slide slide">
                <div class="image">
                    <img src="images/home-img-3.jpg" alt="" />
                </div>
                <div class="content">
                    <span>upto 50% off</span>
                    <h3>headphones</h3>
                    <a href="#" class="btn">shop now</a>
                </div>
            </div>
    
            </div>
    
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
    
        </div>
    
    </section>
)
}
export default CarouselItem