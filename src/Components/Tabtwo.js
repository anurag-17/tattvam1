import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor2_1 from './images/flor/3bhk1.jpg';
import floor2_2 from './images/flor/3bhk2.jpg';
import floor2_3 from './images/flor/3bhk3.jpg';
import floor2_4 from './images/flor/3bhk4.jpg';

export const Tabtwo = () => {
      const [tabtwo, setHometwo] = useState([]); 
      useEffect(() => {
          async function tabtwocontent(){
              const tabtwodata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const tabtwodatashow = await tabtwodata.json();
                setHometwo(tabtwodatashow.acf);
               // console.log(tabtwodatashow.acf);
          }
          tabtwocontent();

      },[])


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
          src={floor2_1}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor2_2}
          alt="Second slide"
        />
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor2_3}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor2_4}
          alt="Third slide"
        />       
      </Carousel.Item>
      </Carousel>
        </div>
      </div> 
      </div>
  )
}

