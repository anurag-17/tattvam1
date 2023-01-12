import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Connectivity = () => {

  const [cnctvy, setCnctvy] = useState([]); 
  useEffect(() => {
      async function connecti() {
          const connectidata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const connectidatas = await connectidata.json();
          setCnctvy(connectidatas.acf.connectivtiy_data);
          //console.log(connectidatas.acf.connectivtiy_data);
      }
      connecti();

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

{ cnctvy&& cnctvy.connectivity_data_1&&
        <tr>
          <td>{cnctvy.connectivity_data_1}</td>
          <td>{cnctvy.connectivity_distance_1}</td>
        </tr>
}
{ cnctvy&& cnctvy.connectivity_data_2&&
        <tr>
        <td>{cnctvy.connectivity_data_2}</td>
          <td>{cnctvy.connectivity_distance_2}</td>
        </tr>
}        
{ cnctvy&& cnctvy.connectivity_data_3&&
        <tr>
        <td>{cnctvy.connectivity_data_3}</td>
          <td>{cnctvy.connectivity_distance_3}</td>
        </tr>
}
{ cnctvy&& cnctvy.connectivity_data_4&&        
        <tr>
        <td>{cnctvy.connectivity_data_4}</td>
          <td>{cnctvy.connectivity_distance_4}</td>
        </tr>  
}
{ cnctvy&& cnctvy.connectivity_data_5&&              
        <tr>
        <td>{cnctvy.connectivity_data_5}</td>
          <td>{cnctvy.connectivity_distance_5}</td>
        </tr>
}
{ cnctvy&& cnctvy.connectivity_data_6&&         
        <tr>
        <td>{cnctvy.connectivity_data_6}</td>
          <td>{cnctvy.connectivity_distance_6}</td>
        </tr>  
}
{ cnctvy&& cnctvy.connectivity_data_7&&        
        <tr>
        <td>{cnctvy.connectivity_data_7}</td>
          <td>{cnctvy.connectivity_distance_7}</td>
        </tr>  
}        
      </tbody>
    </Table>
    </div>
  )
}

export default Connectivity
