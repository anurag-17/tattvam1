import React, { useEffect, useState } from 'react';


const GreenBuilding = () => {

  const [greenb, setGreenb] = useState([]);

  useEffect(() => {
    async function Greenb(){
              const greenb = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const greenbs = await greenb.json();
              setGreenb(greenbs.acf.specification.green_building_sustainable);
              //console.log(greenbs.acf.specification.green_building_sustainable);
    }
  
    Greenb()
  },[])


    return (
        <div>
          <div className='specification-ct'>
             <ul>
              <li>{greenb.green_building_sustainableone}</li>
              <li>{greenb.green_building_sustainabletwo}</li>
              <li>{greenb.green_building_sustainablethree}</li>
              <li>{greenb.green_building_sustainablefour}</li>
              <li>{greenb.green_building_sustainablefive}</li>
              <li>{greenb.green_building_sustainablesix}</li>
              <li>{greenb.green_building_sustainableseven}</li>
              <li>{greenb.green_building_sustainableeight}</li>
             </ul>        
          </div>
        </div>
      )
}

export default GreenBuilding
