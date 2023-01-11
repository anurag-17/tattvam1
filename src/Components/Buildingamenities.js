
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import "./swiper.css";
import { useSwiper } from 'swiper/react';


export default function Slider() {

  const swiper = useSwiper();

  const [buidingpost, setBuidingpost] = useState([]);
  useEffect(() => {

      async function buidingpostsdata(){

          const buidingpostsdatas = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/building_amenities/');

          const buidposts = await buidingpostsdatas.json(); 
          setBuidingpost(buidposts);
          //console.log(buidposts);

      }
      buidingpostsdata();
     

  },[])





  return (


          <section id="building"> 
           <div className='container'>
              <Swiper
                slidesPerView={3}
                spaceBetween={0}
                navigation={{ clickable: true,}}
                loop={true}
                autoplay={{delay:500}}
                pagination={{clickable:true,}}
                breakpoints={{
                  "1024": {
                    slidesPerView:3,
                    spaceBetween:0,
                  },
                  "768": {
                    slidesPerView: 2,
                    spaceBetween:5,
                  },
                  "640": {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  "568": {
                    slidesPerView:1,
                    spaceBetween: 5,
                  },
                  "200": {
                    slidesPerView:1,
                    spaceBetween:0,
                  },
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper">

                  {buidingpost.map((post, index) => ( 
                        <SwiperSlide key={index}> 
                          <div className='slide-contents'>
                           <img src={post.acf.feature_images}/>
                           <h4>{post.title.rendered}</h4>
                          </div>
                          
                        </SwiperSlide> 
                        
                   ))}
              </Swiper>
              
            </div>
          </section> 

  );
}