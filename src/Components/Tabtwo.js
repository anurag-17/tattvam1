import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';


export const Tabtwo = () => {
      const [tabtwo, setHometwo] = useState([]); 
      useEffect(() => {
          async function tabtwocontent(){
              const tabtwodata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const tabtwodatashow = await tabtwodata.json();
                setHometwo(tabtwodatashow.acf.three_bhk);
              //console.log(tabtwodatashow.acf);
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
       
        {tabtwo.length!=0?(
        <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={tabtwo.first_image.url}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tabtwo.second_image.url}
          alt="Second slide"
        />
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={tabtwo.third_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tabtwo.fourth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      </Carousel>
        </div>
        ):('')}
      </div> 
      </div>
  )
}

