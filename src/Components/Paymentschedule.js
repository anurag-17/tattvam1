import React, { useEffect, useState } from 'react';

export const Paymentschedule = () => {

    const [exploredata, SetExploredata] = useState([]);
    const [explorecategory, setExplorecategory] = useState([]);
    const [explorecharges, setExplorecharges] = useState([]);
   
    useEffect(() => {
        async function explorecontent(){
          const response = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
          const responsedata = await response.json();
          SetExploredata(responsedata.acf);
          // console.log(responsedata.acf);
          setExplorecategory(responsedata.acf.table_categories);
          // console.log(responsedata.acf.table_categories);
          setExplorecharges(responsedata.acf.charge);
          // console.log("data",responsedata.acf.charge);
        
     }
        explorecontent();

    
    
    
      }, [])

  return (
    <section id='Payment-sec'>
    <div className='container'>
      <div className='Payment-main'>
        <h3>{exploredata.payment_plan_title}</h3>

        <div className='extra-ct'>
          <table className='table table-extra table-bordered table-striped categry-tble'>
            <thead>
              <tr>
                <th scope="col">{exploredata.category_title} </th>
                <th scope="col">{exploredata.charge_title}</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>{explorecategory.line14} </td>
                <td>{explorecharges.charge_14}</td>
              </tr>
              <tr>
                <td><span>1</span>{explorecategory.line_1} </td>
                <td>{explorecharges.charge_1}</td>
              </tr>
             


                <tr>
                  <td><span>2</span>{explorecategory.line_2}</td>
                  <td>{explorecharges.charge_2}</td>
                </tr>
                <tr>
                  <td><span>3</span>{explorecategory.line_3}</td>
                  <td>{explorecharges.charge_3}</td>
                </tr>

                <tr>
                  <td><span>4</span>{explorecategory.line_4}</td>
                  <td>{explorecharges.charge_4}</td>
                </tr>
                <tr>
                  <td><span>5</span>{explorecategory.line_5}</td>
                  <td>{explorecharges.charge_5}</td>
                </tr>
                <tr>
                  <td><span>6</span>{explorecategory.line_6}</td>
                  <td>{explorecharges.charge_6}</td>
                </tr>
                <tr>
                  <td><span>7</span>{explorecategory.line_7}</td>
                  <td>{explorecharges.charge_7}</td>
                </tr>
                <tr>
                  <td><span>8</span>{explorecategory.line_8}</td>
                  <td>{explorecharges.charge_8}</td>
                </tr>
                <tr>
                  <td><span>9</span>{explorecategory.line_9}</td>
                  <td>{explorecharges.charge_9}</td>
                </tr>
                <tr>
                  <td><span>10</span>{explorecategory.line_10}</td>
                  <td>{explorecharges.charge_10}</td>
                </tr>
                <tr>
                  <td><span>11</span>{explorecategory.line_11}</td>
                  <td>{explorecharges.charge_11}</td>
                </tr>
                <tr>
                  <td><span>12</span>{explorecategory.line_12}</td>
                  <td>{explorecharges.charge_12}</td>
                </tr>
                <tr>
                  <td>{explorecategory.line_13}</td>
                  <td>{explorecharges.charge_13}</td>

                </tr>
               


               

    </tbody>
          </table>

       
        </div>
       

      </div>
    </div>
  </section>

  )
}
