import React, { useEffect, useState } from 'react';

const Flooring = () => {

  const [flooring, setFlooring] = useState([]);
  useEffect(() => {
      async function Floorings() {
          const floorings = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const flooringss = await floorings.json();
          setFlooring(flooringss.acf.specification.flooringtiling);
          //console.log(flooringss.acf.specification.flooringtiling);
      }
      Floorings();

    },[])

  return (
    <div>
       <div className='specification-ct'>
        
         <ul>
          <li>{flooring.flooringtilingone}</li>
          <li>{flooring.flooringtilingtwo}</li>
          <li>{flooring.flooringtilingthree}</li>
         </ul>
    
      </div>
    </div>
  )
}

export default Flooring