import React, { useEffect, useState } from 'react';

const Electricals = () => {
  const [electrical, setElectrical] = useState([]);

  useEffect(() => {
    async function Electrical(){
              const electricals = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const electricalss = await electricals.json();
              setElectrical(electricalss.acf.specification.electricals);
              //console.log(electricalss.acf.specification.electricals);
    }
  
    Electrical()
  },[])

    return (
        <div>
          <div className='specification-ct'>
             <ul>
              <li>{electrical.electricalsone}</li>
              <li>{electrical.electricalstwo}</li>
              <li>{electrical.electricalsthree}</li>
              <li>{electrical.electricalsfour}</li>
              <li>{electrical.electricalsfive}</li>
              <li>{electrical.electricalssix}</li>
              <li>{electrical.electricalsseven}</li>
              <li>{electrical.electricalseight}</li>
             </ul>        
          </div>
        </div>
      )
}

export default Electricals
