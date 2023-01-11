import React, { useState } from 'react'
import GoogleMapReact from "google-map-react";
import School from './School';
import './Mapreach.css';
import Market from './Market';
import Offices from './Offices';
import Connectivity from './Connectivity';

const Mapreach = () => {


  const [school, setSchool] = useState(true);
  const [market, setMarket] = useState(false);
  const [connectivity, setConnectivity] = useState(false);
  const [office, setOffice] = useState(false);

  const handleSchool = () => {
    // console.log(event);
    setSchool(true)
    setMarket(false)
    setConnectivity(false)
    setOffice(false)

  }
  const handleMarket = () => {
    setSchool(false)
    setMarket(true)
    setConnectivity(false)
    setOffice(false)
  }
  const handleConnectivity = () => {
    setSchool(false)
    setMarket(false)
    setConnectivity(true)
    setOffice(false)

  }

  const handleOffice = () => {
    setSchool(false)
    setMarket(false)
    setConnectivity(false)
    setOffice(true)

  }




  return (
    <div>
      <div className='map-sec1'>
        <div id='mapreacg-sec'>
          <div className='container mappatten'>
            <div className='mapshadow'>

              <h3 className='mob-maptitle'>Everything Within Reach</h3>
              <div className='reach-map'>
                <div className='reach-left'>
                  <div id="map-container-google-1" className="z-depth-1-half map-container">

                    {
                      school &&
                      <>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29480.376207004538!2d88.40550793190921!3d22.53991109952606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743fd117bac1%3A0xf29bf89dface421d!2sKolkata%2C%20West%20Bengal%20700105!5e0!3m2!1sen!2sin!4v1673348632390!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {
                      market &&
                      <>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29480.376207004538!2d88.40550793190921!3d22.53991109952606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743fd117bac1%3A0xf29bf89dface421d!2sKolkata%2C%20West%20Bengal%20700105!5e0!3m2!1sen!2sin!4v1673348632390!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {
                      connectivity &&
                      <>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29480.376207004538!2d88.40550793190921!3d22.53991109952606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743fd117bac1%3A0xf29bf89dface421d!2sKolkata%2C%20West%20Bengal%20700105!5e0!3m2!1sen!2sin!4v1673348632390!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {

                      office &&
                      <>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29480.376207004538!2d88.40550793190921!3d22.53991109952606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02743fd117bac1%3A0xf29bf89dface421d!2sKolkata%2C%20West%20Bengal%20700105!5e0!3m2!1sen!2sin!4v1673348632390!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                   </>
                    }




                  </div>
                </div>
                <div className='reach-right'>
                  <h3> Location</h3>
                  <h4 >Everything Within Reach</h4>
                  <div
                    defaultactivekey="School"
                    id="uncontrolled-tab-example"
                    className="mb-3 tab-rt"
                  >

                    <ul className='tabs-links'>
                      <li className={school ? "active" : undefined} eventkey="School" title="School" onClick={handleSchool}>Hospitals </li>
                      <li className={market ? "active" : undefined} eventkey="Market" title="Market" onClick={handleMarket}>Markets </li>
                      <li className={connectivity ? "active" : undefined} eventkey="Connectivity" title="Connectivity" onClick={handleConnectivity}>Connectivity</li>
                      {/* <li className={office ? "active" :undefined} eventkey="Offices" title="Offices" onClick={handleOffice}> office</li> */}
                    </ul>

                    <div className='tablecontebts-map'>
                      {
                        school &&
                        <School />

                      }





                      {
                        market &&
                        <Market />

                      }




                      {
                        connectivity &&
                        <Connectivity />
                      }




                      {
                        office &&
                        <Offices />
                      }

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mapreach
