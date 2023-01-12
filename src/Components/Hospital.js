import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';

const Hospital = () => {

  const [schl, setSchl] = useState([]); 
  useEffect(() => {
      async function schldata() {
          const schldatas = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const schldatass = await schldatas.json();
          setSchl(schldatass.acf.school_data);
          //console.log(schldatass.acf.school_data);
      }
      schldata();

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

{ schl&& schl.hospital_1_name&&

        <tr>
          <td>{schl.hospital_1_name}</td>
          <td>{schl.hospital_1_distance}</td>
        </tr>

}

{ schl&& schl.hospital_2_name&&        
        <tr>
        <td>{schl.hospital_2_name}</td>
          <td>{schl.hospital_2_distance}</td>
        </tr>
}


{ schl&& schl.hospital_3_name&&        
        <tr>
        <td>{schl.hospital_3_name}</td>
          <td>{schl.hospital_3_distance}</td>
        </tr>
}      

{ schl&& schl.hospital_4_name&&

        <tr>
        <td>{schl.hospital_4_name}</td>
          <td>{schl.hospital_4_distance}</td>
        </tr>
}

{ schl&& schl.hospital_5_name&&
        <tr>
        <td>{schl.hospital_5_name}</td>
          <td>{schl.hospital_5_distance}</td>
        </tr>
}

{ schl&& schl.hospital_6_name&&
        <tr>
        <td>{schl.hospital_6_name}</td>
          <td>{schl.hospital_6_distance}</td>
        </tr>
}


      </tbody>
    </Table>
    </div>
  )
}

export default Hospital