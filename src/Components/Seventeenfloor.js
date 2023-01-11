import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import floor7_1 from './images/flor/F-7A_10A.jpg';
import floor7_2 from './images/flor/F_7B_10B.jpg';
import floor7_3 from './images/flor/F_7C_10C.jpg';
import floor7_4 from './images/flor/F_7D_10D.jpg';
import floor7_5 from './images/flor/F_7E_710.jpg';
import floor7_6 from './images/flor/F_7F_710.jpg';
import floor7_7 from './images/flor/F_7G_10G.jpg';

export const Seventeenfloor = () => {
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
       src={floor7_1}
       alt="First slide"
     />        
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_2}
       alt="Second slide"
     />
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_3}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_4}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_5}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_6}
       alt="Third slide"
     />       
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={floor7_7}
       alt="Third slide"
     />       
   </Carousel.Item>
 
   </Carousel>
     </div>
   </div> 
      </div>
  )
}