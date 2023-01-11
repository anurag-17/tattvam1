import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Tabthree = () => {


  const [grndflr, setGrndflr] = useState([]);

  async function Grndflrs() {
    const Grndflrdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
    const Grndflrdatas = await Grndflrdata.json();
    setGrndflr(Grndflrdatas.acf.four_bhk);
    //console.log(Grndflrdatas.acf.four_bhk);
  }
  useEffect(() => {
    

    Grndflrs();
  }, [])
  
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};


const test=()=>{
  //console.log(grndflr);
}
  return (
    <div>
        <div className='container'>
        
      
{grndflr.first_image && grndflr.first_image.url&&  <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.first_image.url}
          alt="First slide"
        />        
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.second_image.url}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.third_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fourth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fifth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
    */}
      </Carousel>
        </div>}
       
      </div> 
      </div>
  )
}