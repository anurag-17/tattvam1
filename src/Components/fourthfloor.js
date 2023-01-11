import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor4_1 from './images/flor/F_4A.jpg';
import floor4_2 from './images/flor/F_4B.jpg';
import floor4_3 from './images/flor/F_4C.jpg';
import floor4_4 from './images/flor/F_4D.jpg';
import floor4_5 from './images/flor/F_4E.jpg';
import floor4_6 from './images/flor/F_4F.jpg';
import floor4_7 from './images/flor/F_4G.jpg';


export const Fourthfloor = () => {

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
          src={floor4_1}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_3}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_4}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_5}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_6}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4_7}
          alt="Third slide"
        />       
      </Carousel.Item>
    
      </Carousel>
        </div>
      </div> 
      </div>
  )
}