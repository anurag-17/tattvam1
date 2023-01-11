import React, { useEffect, useState } from 'react';

const  Walls = () => {

  const [wall, setWall] = useState([]);
  useEffect(() => {
      async function walldata() {
          const walls = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const wallss = await walls.json();
          setWall(wallss.acf.specification.walls);
          //console.log(wallss.acf.specification.walls);
      }
      walldata();

    },[])

  return (
    <div>
      <div className='specification-ct'>       
         <ul>
          <li>{wall.wallcontentone}</li>
          <li>{wall.wallcontenttwo}</li>
          <li>{wall.wallcontentthree}</li>
         </ul>
    
      </div>
    </div>
  )
}

export default  Walls;