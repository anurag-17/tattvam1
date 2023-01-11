import React, { useEffect, useState } from 'react'

export const Tabsdata = () => {
        const[tabdata, SetTabdata] = useState([]);
      
        useEffect(() => {
            async function tabcontents(){
            const tabdatas = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
                    const response = await tabdatas.json();
                    SetTabdata(response.acf.tabs_specification);
                    console.log(response.acf.tabs_specification);
            }   
            tabcontents();
            

        },[])

  return (
    <>
    
    <div className="hello">
        {tabdata.doors_windows} 
    </div>
    </>
  )
}
