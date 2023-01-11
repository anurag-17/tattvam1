import React, { useEffect, useState } from 'react';
import './Explore.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Walls from './Walls'
import Flooring from './Flooring';
import Sanitary from './Sanitary';
import Work from './Work';
import Doors from './Doors';
import Electricals from './Electricals';
import Safety from './Safety';
import WaterSupply from './WaterSupply';
import GreenBuilding from './GreenBuilding';
import { Price } from './Price';
import { Paymentschedule } from './Paymentschedule';
import { Extracharges } from './Extracharges';

const Explore = () => {

  const [exploredata, SetExploredata] = useState([]);
  // const [explorecategory, setExplorecategory] = useState([]);
  //const [explorecharges, setExplorecharges] = useState([]);
  //const [depositedatas, setDepositedatas] = useState([]);
  const [amenity, setAmenity] = useState([]);

  const [show, setShow] = useState(false);
  const [showbtn, setShowbtn] = useState(true);
  // const [hidebtn, setHidebtn] = useState(true);


  const [pshow, setPshow] = useState(false);
  const [pshowbtn, setPshowbtn] = useState(true);
  const [showdata, setShowdata] = useState(false)


  useEffect(() => {
    async function explorecontent() {
      const response = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
      const responsedata = await response.json();
      SetExploredata(responsedata.acf);
      // console.log(responsedata.acf);
      //setExplorecategory(responsedata.acf.table_categories);
      // console.log(responsedata.acf.table_categories);
      //setExplorecharges(responsedata.acf.charge);
      // console.log("data",responsedata.acf.charge);
      //setDepositedatas(responsedata.acf.deposite);

    }
    // console.log(explorecategory);
    //console.log(depositedatas);
    explorecontent();

    async function amenities() {
      const amenitiesdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/building_amenities/');
      const amenitiesres = await amenitiesdata.json();
      setAmenity(amenitiesres);
      //  console.log("hello amentities",amenitiesres);

    }
    amenities();




  }, [])

  const showtab = () => {
    setShowdata(true)
    
  }
  const lesstab = () => {
    setShowdata(false)
    
  }

  return (
    <div>
      <section id='AmenitiesDetails'>
        <div className='container amenit-main'>
          <div className='explor-section'>
            <h3>{exploredata.explore_title}</h3>
            <h5>{exploredata.explore_subtitle}</h5>
            <p>{exploredata.explore_content}</p>
          </div>
          <div className='Ament-mian'>
            {amenity.map((post, index) => (
              <div className='At-item1' key={index}>
                <div className='Atimg'>
                  <img src={post.acf.feature_images} alt={post.title.rendered}></img>
                </div>
                <div className='Ament-title'>
                  <h5>{post.title.rendered}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      <section id='Specifications' class="desktop-lists">
        <div className='container'>
          {/* <h3>{exploredata.payment_plan_title}</h3>  */}
          <h3>Specifications</h3>

          <div className='specifictab'>
            <Tab.Container id='left-tabs-example' defaultActiveKey="first">
              <Row g-0="true">
                <Col sm={3}>
                  <Nav variant="pills" className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Structure</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Brickwork </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Elevation </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">  External Finish  </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fivth"> Lobbies </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="six"> Doors & Hardware   </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seven">Windows & Railings </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eight">Flooring</Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Col>
                <Col sm={9} className='tab-des'>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Walls />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Flooring />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Sanitary />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Doors />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fivth">
                      <Electricals />
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <Safety />
                    </Tab.Pane>
                    <Tab.Pane eventKey="seven">
                      <WaterSupply />
                    </Tab.Pane>
                    <Tab.Pane eventKey="eight">
                      <GreenBuilding />
                    </Tab.Pane>
                    <Tab.Pane eventKey="nine">
                      <Safety />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </section>

      <section id='Specifications' class="mobiles-lists">
        <div className='container'>
          {/* <h3>{exploredata.payment_plan_title}</h3>  */}
          <h3>Specifications</h3>

          <div className='specifictab'>
            <Tab.Container id='left-tabs-example'>
              <Row g-0="true">
                <Col sm={3}>
                  <Nav variant="pills" className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Walls</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Flooring/Tiling </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Sanitary & CP fittings </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">  Doors & Windows   </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fivth"> Electricals </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="six"> Safety & Security   </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seven"> Windows & Railings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eight">Green Building Sustainable Initiatives  </Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Col>
                <Col sm={9} className='tab-des'>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Walls />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Flooring />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Sanitary />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Doors />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fivth">
                      <Electricals />
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <Safety />
                    </Tab.Pane>
                    <Tab.Pane eventKey="seven">
                      <WaterSupply />
                    </Tab.Pane>
                    <Tab.Pane eventKey="eight">
                      <GreenBuilding />
                    </Tab.Pane>
                    <Tab.Pane eventKey="nine">
                      <Safety />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </section>



      <section class="tabs-three-listingss">
        <div class="container">

        <div className='btn_grp'>
        <button className={showdata == false ? "btn btn-light buttonprice" : "nonecontent"} onClick={showtab}>Price (Click to know More)</button>
         <button className={showdata == false ? "nonecontent" : "btn btn-light buttonprice"} onClick={lesstab}>View Less</button>
        </div>

          <div className={showdata == false ? "nonecontent" : "showcontent"}>
            <Price />
          </div>
          {/* <Tabs id='uncontrolled-tab-example' className='mb-3'>      
     
      <Tab eventKey="threess" title="Price (Click to know More)">
         <Price/>
      </Tab>
      <Tab eventKey="twooss" title="Extra Charge (Click to know More)">
        <Extracharges/>
      </Tab>
      <Tab eventKey="oness" title="Payment Schedule (Click to know More Section)">
      <Paymentschedule/>
      </Tab>
    </Tabs> */}

        </div>
      </section>
    </div>
  )
}

export default Explore;