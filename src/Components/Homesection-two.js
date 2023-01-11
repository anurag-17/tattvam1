import React, { useEffect, useState } from "react";
import Slider from "./Buildingamenities";
import Galleryhome from './Galleryhome';

export const Homesectiontwo = () => {
    const [hometwo, setHometwo] = useState([]);
    useEffect(() => {
        async function hometwodata() {
            const hometwodata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
            const sethometwonew = await hometwodata.json();
            setHometwo(sethometwonew.acf);
            //    console.log(sethometwonew.acf);

        }



        hometwodata();
    }, [])
    // console.log(homes);
    return (
        <>
            <section className='qty-comfort' id='Quality'>
                <div className='container'>

                    <div className='qty-main'>
                        <div className='qty-text sec-oness'>
                            <div className='qt-title'>
                                <h4> {hometwo.section_two_subheading} </h4>
                            </div>
                            <h3> {hometwo.section_two_title}  </h3>
                            <p>{hometwo.section_two_left_paragraph}</p>
                        </div>


                        {/* <div className='testedsf'>
        
        <ul>
            <li><h4>{hometwo.section_two_right_colom_content_1}</h4></li>
            <li><h4>{hometwo.section_two_right_colom_content_2}</h4></li>
            <li><h4>{hometwo.section_two_right_colom_content_3}</h4></li>
            <li><h4>{hometwo.section_two_right_colom_content_1}</h4></li>

        </ul>
        
        </div> */}


                        <div className='bg-numbers'>

                            <div className='number-wrappers'>
                                <div className='number-colm'>
                                    <div class="img-icons">
                                        <img src={hometwo.section_two_right_colom_img_1} />
                                    </div>
                                    <h4>{hometwo.section_two_right_colom_title_1} </h4>

                                </div>

                                <div className='number-colm'>
                                    <div class="img-icons">
                                        <img src={hometwo.section_two_right_colom_img_2} />
                                    </div>
                                    <h4>{hometwo.section_two_right_colom_title_2} </h4>

                                </div>

                                <div className='number-colm'>
                                    <div class="img-icons">
                                        <img src={hometwo.section_two_right_colom_img_3} />
                                    </div>
                                    <h4>{hometwo.section_two_right_colom_title_3} </h4>

                                </div>

                                <div className='number-colm'>
                                    <div class="img-icons">
                                        <img src={hometwo.section_two_right_colom_img_4} />
                                    </div>
                                    <h4>{hometwo.section_two_right_colom_title_4} </h4>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section id='building'>
                <div className='container'>
                    <h4>{hometwo.building_subtitle}</h4>
                    <h3>{hometwo.main_title_building}</h3>
                    <Slider />
                </div>
            </section>


            <Galleryhome />







        </>
    );
}

export default Homesectiontwo