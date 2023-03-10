import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';

const Market = () => {

  const [mrkt, setMrkt] = useState([]); 
  useEffect(() => {
      async function markets() {
          const marketdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const marketdatas = await marketdata.json();
          setMrkt(marketdatas.acf.market_data);
          //console.log(marketdatas.acf.market_data);
      }
      markets();

    },[])


  return (
    <div>
      <Table className='right-content' bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>

{ mrkt&& mrkt.market_data_1&&        
        <tr>
          <td>{mrkt.market_data_1}</td>
          <td>{mrkt.market_distance_1}</td>
        </tr>
}
{ mrkt&& mrkt.market_data_2&&
        <tr>
        <td>{mrkt.market_data_2}</td>
          <td>{mrkt.market_distance_2}</td>
        </tr>
}
{ mrkt&& mrkt.market_data_3&&        
        <tr>
        <td>{mrkt.market_data_3}</td>
          <td>{mrkt.market_distance_3}</td>
        </tr>
}
{ mrkt&& mrkt.market_data_4&&        
        <tr>
        <td>{mrkt.market_data_4}</td>
          <td>{mrkt.market_distance_4}</td>
        </tr>   
}             
{ mrkt&& mrkt.market_data_5&&   
        <tr>
        <td>{mrkt.market_data_5}</td>
          <td>{mrkt.market_distance_5}</td>
        </tr>  
}
{ mrkt&& mrkt.market_data_6&&        
        <tr>
        <td>{mrkt.market_data_6}</td>
          <td>{mrkt.market_distance_6}</td>
        </tr>  
}        
      </tbody>
    </Table>
    </div>
  )
}

export default Market;