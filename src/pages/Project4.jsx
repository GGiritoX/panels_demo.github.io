import React, { useEffect } from 'react';

import Header from "../components/header-project"
import Footer from "../components/footer"
import PNG_IMAGES from '../img/Project1/PNG/index'

import {createCarousel} from '../scripts/newSlider'

import '../css/temp/carousel.css'
import '../css/temp/styles.css'

export default function Project4() {
    
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
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img5} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img6} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img7} alt="" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img8} alt="" />
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