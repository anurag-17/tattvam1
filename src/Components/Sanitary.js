import React, { useEffect, useState } from 'react';

const Sanitary = () => {

  const [sanitary, setSanitary] = useState([]);

  useEffect(() => {
    async function Sanitary(){
              const sanitarys = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const sanitaryss = await sanitarys.json();
              setSanitary(sanitaryss.acf.specification.sanitary_cp_fittings);
              //console.log(sanitaryss.acf.specification.sanitary_cp_fittings);
    }
  
    Sanitary()
  },[])


  return (
    <div>
      <div className='specification-ct'>        
        <ul>
          <li>{sanitary.sanitary_cp_fittingone}</li>
          <li>{sanitary.sanitary_cp_fittingtwo}</li>
          <li>{sanitary.sanitary_cp_fittingthree}</li>
          <li>{sanitary.sanitary_cp_fittingfour}</li>
          <li>{sanitary.sanitary_cp_fittingfive}</li>
          <li>{sanitary.sanitary_cp_fittingsix}</li>
        </ul>   
     </div>
    </div>
  )
}

export default Sanitary;

