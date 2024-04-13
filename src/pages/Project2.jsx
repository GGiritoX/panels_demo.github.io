import Header from "../components/header-project"
import Footer from "../components/footer"
import IMAGES from '../img/Project1/index'

import Slider from "../scripts/slider"

import '../css/projectpage/carousel.css'
import '../css/projectpage/double.css'
import '../css/projectpage/grid.css'
import '../css/projectpage/styles.css'



export default function Project2() {
    return (
        <>
            <Header />
            <main>
                <div className="project-grid fade-2">
                    <div className="element">
                        <div className="info" style={{ margin: "0px 15px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id placeat tenetur recusandae, rerum itaque consectetur. Laudantium hic error recusandae maiores dolorum nostrum dolorem unde optio, iste architecto eius ipsam?
                        </div>
                    </div>
                    <Slider>
                        <section className="active">
                            <img src={IMAGES.img1} alt="" style={{ width: "100%" }} />
                        </section>
                        <section>
                            <div className="row">
                                <div className="column">
                                    <img src={IMAGES.img2} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="column">
                                    <img src={IMAGES.img2_2} alt="" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </section>
                        <section>
                            <img src={IMAGES.img3} alt="" style={{ width: "100%" }} />
                        </section>
                        <section>
                            <img src={IMAGES.img4} alt="" style={{ width: "100%" }} />
                        </section>
                        <section>
                            <img src={IMAGES.img5} alt="" style={{ width: "100%" }} />
                        </section>
                        <section>
                        <div className="row">
                                <div className="column">
                                    <img src={IMAGES.img6} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="column">
                                    <img src={IMAGES.img6_2} alt="" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </section>
                        <section>
                            <img src={IMAGES.img7} alt="" style={{ width: "100%" }} />
                        </section>
                        <section>
                            <img src={IMAGES.img8} alt="" style={{ width: "100%" }} />
                        </section>
                    </Slider>
                    <div className="element"></div>
                </div>

                <div className="projectName fade-3">
                    OLN-36B
                </div>
            </main>
            <Footer />
        </>
    )
}