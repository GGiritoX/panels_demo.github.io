import React, { useEffect } from 'react';
import { useRef } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Header from "../components/header-project"
import Footer from "../components/footer"
import PNG_IMAGES from '../img/Project1/PNG/index'

import { createCarousel } from '../scripts/newCarousel'

import '../css/project-page/carousel.css'
import '../css/project-page/styles.css'
import '../css/project-page/fullscreen.css'

export default function Project1() {

    //LOAD event
    alert('first line');
    useEffect(() => {
        const handleLoad = () => {
            // alert('handleLoad');
            createCarousel();
            createFullscreenView();
            let indicators = document.querySelector('.my-carousel-indicator-container');
            if (!window.matchMedia("(max-width: 1400px)").matches) {
                // console.log('carousel created');
            } else {
                indicators.hidden = true;
            }
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
            createFullscreenView(); //bug phone
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //RESIZE event
    useEffect(() => {
        const handleResize = () => {
            console.log('window resize');
            let indicators = document.querySelector('.my-carousel-indicator-container');
            if (!window.matchMedia("(max-width: 1400px)").matches) {
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
    //========================================================
    function changeText() {
        const myTitle = document.querySelector('#title');
        const myText = document.querySelector('#text');
        myTitle.classList.toggle('hide');
        myText.classList.toggle('hide');
    }
    //========================================================
    const images = [
        {
            original: PNG_IMAGES.img1
        },
        {
            original: PNG_IMAGES.img2
        },
        {
            original: PNG_IMAGES.img3
        },
        {
            original: PNG_IMAGES.img4
        },
        {
            original: PNG_IMAGES.img5
        },
        {
            original: PNG_IMAGES.img6
        },
        {
            original: PNG_IMAGES.img7
        },
        {
            original: PNG_IMAGES.img8
        }
    ];

    const slidesref = useRef();

    function ShowFullscreen(index) {
        alert('open fullscreen');
        slidesref.current.slideToIndex(index);
        slidesref.current.toggleFullScreen();
    }
    function toggleScroll(isFullscreen) {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    function createFullscreenView() {
        const previewImgs = document.querySelectorAll('.project-carousel img');
        alert(`createfullscreen ${previewImgs.length}`);
        console.log(previewImgs);
        previewImgs.forEach(function (previewImg, index) {
            if (previewImg.classList !== "preview") {
                previewImg.classList.add("preview");
                previewImg.addEventListener('click', function () {
                    //if (window.matchMedia("(max-width: 1400px)").matches) {
                    ShowFullscreen(index);
                    // }
                });
            }
        });
    }

    useEffect(() => {
        alert('test effect')
    }, []);
    createFullscreenView();// netlify test

    //TESTS useEffect
    useEffect(() => {
        const handleLoading = () => alert('useEffect - loading');
        const handleInteractive = () => alert('useEffect - interactive');
        const handleComplete = () => alert('useEffect - complete');
        const handleDOMContentLoaded = () => alert('useEffect - DOMContentLoaded');
        const handleLoad = () => alert('useEffect - load');
        const handleBeforeUnload = (event) => alert('useEffect - beforeunload');
        const handleUnload = () => alert('useEffect - unload');

        document.addEventListener('readystatechange', () => {
            if (document.readyState === 'loading') handleLoading();
            else if (document.readyState === 'interactive') handleInteractive();
            else if (document.readyState === 'complete') handleComplete();
        });

        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
        window.addEventListener('load', handleLoad);
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', handleUnload);

        return () => {
            document.removeEventListener('readystatechange', () => {
                if (document.readyState === 'loading') handleLoading();
                else if (document.readyState === 'interactive') handleInteractive();
                else if (document.readyState === 'complete') handleComplete();
            });
            document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, []);

    //========================================================

    return (
        <>
            <Header />
            <main>
                <div className="project-grid fade-2">
                    <div id="d1" onClick={changeText} className='fade-3'>
                        <div id='title' className="project-title center">More<br />...</div>
                        <div id='text' className="project-text hide">
                            Location: Kyiv, Ukraine<br />
                            Year: 2017<br />
                            Area: 120 sq.m.<br />
                            <br />
                            Part of apartment for young couple.
                            During the design of this residence, a palette of light shades was used, creating a sense of spaciousness and luminosity.
                            <br /><br />
                            The open layout of the apartment allows light to circulate freely, giving every corner of the dwelling a cozy and comfortable atmosphere. The furniture is designed in a modern style using natural materials and minimalist forms, adding elegance and lightness to the interior.
                        </div>
                    </div>
                    <div id="d2">
                        <div className="project-carousel">
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img1} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img2} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img3} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img4} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img5} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img6} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img7} alt="" loading="lazy" />
                            </div>
                            <div className="my-carousel-item">
                                <img className="center" src={PNG_IMAGES.img8} alt="" loading="lazy" />
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
                        OLN
                    </div>
                </div>
                <button
                    id="tmp-btn" name="tmp-btn"
                    onClick={createFullscreenView}
                    style={{
                        position: 'fixed',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: '9999',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >CreateFullScreen</button>
            </main>
            <Footer />
            <ImageGallery
                ref={slidesref}
                items={images}
                showThumbnails={false}
                showNav={false}
                showPlayButton={false}
                useBrowserFullscreen={false}
                disableThumbnailScroll={true}
                onScreenChange={toggleScroll}
                slideDuration={0}
            />
        </>
    )
}