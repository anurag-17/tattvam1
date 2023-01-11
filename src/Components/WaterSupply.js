import React, { useEffect, useState } from 'react';

const WaterSupply = () => {


  const [water, setWater] = useState([]);
  useEffect(() => {
      async function waterdata() {
          const waterdatas = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const waterdatass = await waterdatas.json();
          setWater(waterdatass.acf.specification.water_supply);
          //console.log(waterdatass.acf.specification.water_supply);
      }
      waterdata();

    },[])


    return (
        <div>
          <div className='specification-ct'>
             <ul>
              <li>{water.water_supplyone}</li>
              
             </ul>        
          </div>
        </div>
      )
}

export default WaterSupply



