import React, { useEffect } from 'react';

import Header from "../components/header-project"
import Footer from "../components/footer"
import PNG_IMAGES from '../img/Project5/PNG/index'

import { createCarousel } from '../scripts/newCarousel'

import '../css/project-page/carousel.css'
import '../css/project-page/styles.css'

export default function Project5() {
    
    useEffect(() => {
        const handleLoad = () => {
            createCarousel();
            let indicators = document.querySelector('.my-carousel-indicator-container');
            if (!window.matchMedia("(max-width: 1350px)").matches) {
                // console.log('carousel created');
            } else {
                indicators.hidden = true;
            }
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            let indicators = document.querySelector('.my-carousel-indicator-container');

            if (!window.matchMedia("(max-width: 1350px)").matches) {
                if (indicators.hidden) {
                    indicators.hidden = false; // normal view
                    // console.log('carousel show');
                }
            } else {
                // small size
                if (!indicators.hidden) {
                    indicators.hidden = true;
                    // console.log('carousel hide');
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function changeText() {
        const myTitle = document.querySelector('#title');
        const myText = document.querySelector('#text');
        myTitle.classList.toggle('hide');
        myText.classList.toggle('hide');
    }


    return (
        <>
            <Header />
            <main>
                <div className="project-grid fade-2">
                    <div id="d1" onClick={changeText} className='fade-3'>
                        <div id='title' className="project-title center">More<br />...</div>
                        <div id='text' className="project-text hide">
                            Location: <br />
                            Year: <br />
                            Area: <br />
                            <br />
                            Text
                        </div>
                    </div>
                    <div id="d2">
                        <div className="project-carousel">
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img1} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img2} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img3} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img4} alt="" />
                            </div>
                        </div>
                        {/* <div className="my-carousel-btn btn-prev" id="btn-prev"></div> */}
                        {/* <div className="my-carousel-btn btn-next" id="btn-next"></div> */}
                    </div>
                    <div id="d3"></div>
                </div>
                <div className="my-carousel-bottom fade-3">
                    <div className="my-carousel-indicator-container"></div>
                    <div className="project-name">
                        PLN
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}