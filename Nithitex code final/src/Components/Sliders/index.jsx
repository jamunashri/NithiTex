import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './index.css'

const fadeImages = [
   require('../../assets/Slider1.jpg'),
   require('../../assets/Slider2.jpg'),
  require('../../assets/Slider3.jpg'),
 
];

const Slideshow = () => {
  return (
    <div className="slide">
      <Fade duration="2000"  >
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage}  height="60%" width="100%" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow