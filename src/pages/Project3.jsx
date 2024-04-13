import React, { useEffect } from 'react';

import Header from "../components/header-project"
import Footer from "../components/footer"
import IMAGES from '../img/Project1/index'

import {createCarousel} from '../scripts/newSlider'

import '../css/temp/carousel.css'
import '../css/temp/styles.css'

export default function Project3() {
    
    useEffect(() => {
        const handleLoad = () => {
            createCarousel();
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
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
                    <div id="d1" onClick={changeText}>
                        <div id='title' className="project-title center">More<br/>...</div>
                        <div id='text' className="project-text hide">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias magni, quae totam at dolor aspernatur illo nulla quas exercitationem sit error! Molestiae at vero laboriosam magni, deleniti eligendi aliquam dolor?
                        </div>
                    </div>
                    <div id="d2">
                        <div className="project-carousel">
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img1} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <div className="my-carousel-double center">
                                    <div className="my-carousel-double-item">
                                        <img className="center" src={IMAGES.img2} alt="" />
                                    </div>
                                    <div className="my-carousel-double-item">
                                        <img className="center" src={IMAGES.img2_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img3} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img4} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img5} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <div className="my-carousel-double center">
                                    <div className="my-carousel-double-item">
                                        <img className="center" src={IMAGES.img6} alt="" />
                                    </div>
                                    <div className="my-carousel-double-item">
                                        <img className="center" src={IMAGES.img6_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img7} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={IMAGES.img8} alt="" />
                            </div>
                            
                        </div>
                        <div className="my-carousel-btn btn-prev" id="btn-prev"></div>
                        <div className="my-carousel-btn btn-next" id="btn-next"></div>
                        <div className="my-carousel-indicator-container"></div>
                    </div>
                    <div id="d3"></div>
                </div>
                <div className="project-name fade-3">
                    OLN-36B
                </div>
            </main>
            <Footer />
        </>
    )
}