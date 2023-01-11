import React, { useEffect, useState } from 'react';
const  Doors = () => {
  const [door, setDoor] = useState([]);

  useEffect(() => {
    async function Doordata(){
              const doors = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const doorss = await doors.json();
              setDoor(doorss.acf.specification.doors_windows);
            //console.log(doorss.acf.specification.doors_windows);
  
  
    }
  
    Doordata()
  },[])
  


  return (
    <div> 
      <div className='specification-ct'>    
      <ul>
          <li>{door.doors_windowsone}</li>
          <li>{door.doors_windowstwo}</li>
          <li>{door.doors_windowsthree}</li>
          <li>{door.doors_windowsfour}</li>
          <li>{door.doors_windowsfive}</li>
          <li>{door.doors_windowssix}</li>
          <li>{door.doors_windowsseven}</li>
          <li>{door.doors_windowseight}</li>
      </ul>
     </div>
    </div>
  )
}

export default  Doors;