import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor5_1 from './images/flor/A5_ A8.jpg';
import floor5_2 from './images/flor/B5_ B8.jpg';
import floor5_3 from './images/flor/C5_C8.jpg';
import floor5_4 from './images/flor/D5_D8.jpg';
import floor5_5 from './images/flor/E5_E8.jpg';
import floor5_6 from './images/flor/F5_F8.jpg';
import floor5_7 from './images/flor/G5_G8.jpg';


export const Ftosfloor = () => {
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
       src={floor5_1}
       alt="First slide"
     />        
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_2}
       alt="Second slide"
     />
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_3}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_4}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_5}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_6}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor5_7}
       alt="Third slide"
     />       
   </Carousel.Item>
 
   </Carousel>
     </div>
   </div> 
      </div>
  )
}