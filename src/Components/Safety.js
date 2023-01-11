import React, { useEffect, useState } from 'react';

const Safety = () => {
  const [safety, setSafety] = useState([]);

  useEffect(() => {
    async function safety(){
              const safeti = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
              const safetis = await safeti.json();
              setSafety(safetis.acf.specification.safetysecurity);
              //console.log(safetis.acf.specification.safetysecurity);
    }
  
    safety()
  },[])

    return (
        <div>
          <div className='specification-ct'>
             <ul>
              <li>{safety.safetysecurityone}</li>
              <li>{safety.safetysecuritytwo}</li>
              <li>{safety.safetysecuritythree}</li>
              <li>{safety.safetysecurityfour}</li>
              <li>{safety.safetysecurityfive}</li>
              <li>{safety.safetysecuritysix}</li>
              <li>{safety.safetysecurityseven}</li>
             </ul>        
          </div>
        </div>
      )
}

export default Safety
