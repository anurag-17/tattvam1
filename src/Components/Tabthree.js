import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor3_1 from './images/flor/4bhk1.jpg';
// import floor3_2 from './images/flor/F3_F6-F_Flat_A.jpg';
// import floor3_3 from './images/flor/F3_ F6_ F9Flat_B_final.jpg';
// import floor3_4 from './images/flor/F3_F6_F9_Flat_C final.jpg';
// import floor3_5 from './images/flor/F3_ F6,_F9-Flat_Dfinal.jpg';
// import floor3_6 from './images/flor/F3_F6_F9_Flat_E final.jpg';
// import floor3_7 from './images/flor/F3_ F6_ F9_Flat F.jpg';

export const Tabthree = () => {



const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};


  return (
    <div>
        <div className='container'>
        
        
        <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_1}
          alt="First slide"
        />        
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_3}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_4}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_5}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_6}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_7}
          alt="Third slide"
        />       
      </Carousel.Item> */}
      </Carousel>
        </div>
      </div> 
      </div>
  )
}