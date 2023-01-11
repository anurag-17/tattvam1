//import React, { useEffect, useState } from 'react';

export const Extracharges = () => {

//     const [expdata, SetExpdata] = useState();

//     useEffect(() => {
//         async function explorecontent(){
//           const response = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
//           const responsedata = await response.json();
//           SetExpdata(responsedata);
//          // console.log(responsedata.acf.extra_charge_content);
//      }
//         explorecontent();

    
    
    
//       }, [])
// //console.log(expdata);

  return (
    <section id='pricee-sctions'>
    <div className='container'>
      <div className='Payment-main'>
        <h3>Extra Charges</h3>
        <h5>Mentionable additional charges include</h5>
          <div className='extra-ct'>
              <ul>
                 <li>PL Charges</li>
                <li>Price for first floor covered car parking</li>
                <li>Price for ground covered car parking</li>
               {/* <li>{expdata.extra_charge_content.extra_charge_4}</li>
                <li>{expdata.extra_charge_content.extra_charge_5}</li> */}
              </ul>
          </div>
      </div>
   </div>
 </section>

  )
}
