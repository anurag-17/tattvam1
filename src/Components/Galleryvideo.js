import React, { useEffect, useState, useRef } from "react";
import './Galleryhome.css';
import Masony from "react-masonry-component";
import Carousel from 'react-bootstrap/Carousel';
import { initial, slice } from 'lodash'
import ReactPlayer from "react-player";

// Masory Options
const masonryOptions = {
    fitWidth: false,
    columnWidth: 350,
    gutter: 3,
    itemSelector: ".photo-item"
};


export default function Galleryvideo() {

    const [videosData, setvideosData] = React.useState([]);
    const [isFinished, setIsFinished] = useState(false)
    const [index, setIndex] = useState(3)
    const initialUsers = slice(videosData, 0, index)

    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
        getData();
    }, []);



    const getData = () => {
        fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/video_gallery/')
            .then((response) => response.json())
            .then((res) => {
                setvideosData([...videosData, ...res]);
            })
            .catch((err) => { });
    };
    console.log(videosData);

    const showMore = () => {
        setIndex(index + 3)
        //console.log(index)
        if (index >= videosData.length) {
            setIsFinished(true)
        } else {
            setIsFinished(false)
        }
    }
    const showless = () => {
        setIndex(3)
        setIsFinished(false)
    }


    const [glyttl, setGlyttl] = useState([]);

    useEffect(() => {
        async function gallerycon() {
            const gallerycondata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
            const gallerycondatas = await gallerycondata.json();
            setGlyttl(gallerycondatas.acf);
            // console.log(gallerycondatas.acf);
        }
        gallerycon();

    }, [])

    let videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);



    return (
        <>
            <section id='gallery' className="galleryvideoA">
                <div className='container'>
                    {/* <h4 > {glyttl.gallery_title}</h4> */}
                    <h3 className="galleryvideoh3">Our Videos</h3>
                    <div className='galley-main'>
                        <div className='conatiner'>
                            <div className='desktop-gallery'>
                                <div datalength={videosData.length}
                                    hasmore="true"
                                    loader={<h4></h4>}
                                    endmessage={
                                        <p style={{ textAlign: "center" }}>
                                            <b>Yay! You have seen it all</b>
                                        </p>
                                    }
                                    pulldowntorefresh="true"
                                    pulldowntorefreshthreshold={6}
                                    pulldowntorefreshcontent={
                                        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
                                    }
                                    releasetorefreshcontent={
                                        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
                                    }
                                >
                                    <div className="videobox_flex">
                                        {videosData &&
                                            initialUsers.map((photo, index) => (
                                                <li className={`photo-item`} key={index}>
                                                    <div className="m-1">

                                                        <ReactPlayer

                                                            ref={videoRef}
                                                            url={photo.acf.video_url}
                                                            width="100%"
                                                            pip={true}
                                                            controls={true}
                                                            playing={isPlaying}

                                                            
                                                        />

                                                    </div>

                                                </li>

                                            ))}
                                    </div>
                                </div>
                                <div className="video_btn">
                                    {

                                        isFinished ? (
                                            <button
                                                onClick={showless}
                                                type="button"
                                                className="disabled showbtn showbtn_video"
                                            >
                                                Viewed less
                                            </button>
                                        ) : (
                                            <button onClick={showMore} type="button" className="showbtn showbtn_video">
                                                Load more
                                            </button>
                                        )}

                                </div>



                            </div>

                            <div className='mob-gallery'>
                                <Carousel>
                                    {videosData &&
                                        videosData.map((video, index) => (
                                            <Carousel.Item interval={1000} key={index}>
                                                {/* <img
                                                    className='d-block w-100'
                                                    src={video.acf.video_url}
                                                    alt="First slide"
                                                /> */}
                                                <ReactPlayer

                                                    ref={videoRef}
                                                    url={video.acf.video_url}
                                                    width="100%"
                                                    pip={true}
                                                    controls={true}
                                                    playing={isPlaying}


                                                />
                                            </Carousel.Item>
                                        ))}

                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}