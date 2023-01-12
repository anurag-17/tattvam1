import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
// import floor3 from './images/flor/F1_F-B.jpg';
// import floor4 from './images/flor/F1_F-G.jpg';



export const Firstfloor = () => {
  
const [grndflr, setGrndflr] = useState([]);

useEffect(() => {
  async function Grndflrs(){
            const Grndflrdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
            const Grndflrdatas = await Grndflrdata.json();
            setGrndflr(Grndflrdatas.acf.two_bhk);
     //console.log(Grndflrdatas.acf.two_bhk);
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
      
        
        <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
{ grndflr&& grndflr.one_image&&      
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.one_image.url}
          alt="First slide"
        />        
      </Carousel.Item>
}
{  grndflr&& grndflr.two_image&&
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.two_image.url}
          alt="Second slide"
        />
      </Carousel.Item>
}
{ grndflr&& grndflr.third_image&&  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.third_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>

}
{ grndflr&& grndflr.fourth_image&&
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fourth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
}

{ grndflr&& grndflr.fifth_image&&


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fifth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
}

      </Carousel>
        </div>
      </div> 
      </div> 
  )
}