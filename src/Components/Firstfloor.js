import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor1 from './images/flor/2bhk1.jpg';
import floor2 from './images/flor/2bhk2.jpg';
// import floor3 from './images/flor/F1_F-B.jpg';
// import floor4 from './images/flor/F1_F-G.jpg';



export const Firstfloor = () => {
  
const [grndflr, setGrndflr] = useState([]);

useEffect(() => {
  async function Grndflrs(){
            const Grndflrdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
            const Grndflrdatas = await Grndflrdata.json();
            setGrndflr(Grndflrdatas.acf);
//console.log(Grndflrdatas.acf);
  }

  Grndflrs();
},[])


const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

  return (
      <div>     
         <div className='container'>
        {/* <img src={grndflr.floor_plan_tab_ground}/> */}
        
        <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor1}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor2}
          alt="Second slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor4}
          alt="Third slide"
        />       
      </Carousel.Item> */}
      </Carousel>
        </div>
      </div> 
      </div> 
  )
}