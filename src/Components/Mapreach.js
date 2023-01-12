import './Mapreach.css';
import Market from './Market';
import Offices from './Offices';
import Connectivity from './Connectivity';
import { useEffect, useState } from "react";
import Hospital from "./Hospital";

const Mapreach = () => {


  const [school, setSchool] = useState(true);
  const [market, setMarket] = useState(false);
  const [connectivity, setConnectivity] = useState(false);
  const [office, setOffice] = useState(false);
  const [mapcontent, setMapcontent] = useState([]);
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
  useEffect(() => {
    async function mapcontents() {
        const mapdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
        const mapdatas = await mapdata.json();
        setMapcontent(mapdatas.acf);
        //console.log(mapdatas.acf);

    }



    mapcontents();
}, [])




  return (
    <div>
      <div className='map-sec1'>
        <div id='mapreacg-sec'>
          <div className='container mappatten'>
            <div className='mapshadow'>

              <h3 className='mob-maptitle'>{mapcontent.subtitle_map}</h3>
              <div className='reach-map'>
                <div className='reach-left'>
                  <div id="map-container-google-1" className="z-depth-1-half map-container">

                    {
                      school &&
                      <>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14735.709240707305!2d88.38692079282227!3d22.581821853869425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027673cba382d1%3A0x6f36097e0b219c10!2sKolkata%2C%20West%20Bengal%20700054!5e0!3m2!1sen!2sin!4v1673501118253!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {
                      market &&
                      <>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14735.709240707305!2d88.38692079282227!3d22.581821853869425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027673cba382d1%3A0x6f36097e0b219c10!2sKolkata%2C%20West%20Bengal%20700054!5e0!3m2!1sen!2sin!4v1673501118253!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {
                      connectivity &&
                      <>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14735.709240707305!2d88.38692079282227!3d22.581821853869425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027673cba382d1%3A0x6f36097e0b219c10!2sKolkata%2C%20West%20Bengal%20700054!5e0!3m2!1sen!2sin!4v1673501118253!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                      </>
                    }

                    {

                      office &&
                      <>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14735.709240707305!2d88.38692079282227!3d22.581821853869425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027673cba382d1%3A0x6f36097e0b219c10!2sKolkata%2C%20West%20Bengal%20700054!5e0!3m2!1sen!2sin!4v1673501118253!5m2!1sen!2sin" className='reach-ifram' allowFullScreen="" loading="lazy"></iframe>
                   </>
                    }




                  </div>
                </div>
                <div className='reach-right'>
                  <h3> {mapcontent.location_title}</h3>
                  <h4 >{mapcontent.subtitle_map}</h4>
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
                        <Hospital />

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
