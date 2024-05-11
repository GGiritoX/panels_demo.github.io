import Header from "../components/header-main"
import Footer from "../components/footer"
import IMAGES from '../img/titles/index'

import "../css/panels.css"
import "../css/bwstyle.css"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="content fade-2">
                    <div className="panels">
                        <div className="panel">
                            <a href="/Project1">
                                <img className="bw-image" href="Project1" src={IMAGES.img1} alt="" loading="lazy" />
                                <div className="panel-text">OLN</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project2">
                                <img className="bw-image" href="Project2" src={IMAGES.img2} alt="" loading="lazy" />
                                <div className="panel-text">VLS</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project3">
                                <img className="bw-image" href="Project3" src={IMAGES.img3} alt="" loading="lazy" />
                                <div className="panel-text">PRJT</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project4">
                                <img className="bw-image" href="Project4" src={IMAGES.img4} alt="" loading="lazy" />
                                <div className="panel-text">OMM</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project5">
                                <img className="bw-image" href="Project5" src={IMAGES.img5} alt="" loading="lazy" />
                                <div className="panel-text">PLN</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project6">
                                <img className="bw-image" href="Project6" src={IMAGES.img6} alt="" loading="lazy" />
                                <div className="panel-text">SVN7</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project7">
                                <img className="bw-image" href="Project7" src={IMAGES.img7} alt="" loading="lazy" />
                                <div className="panel-text">ZOO6</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project8">
                                <img className="bw-image" href="Project8" src={IMAGES.img8} alt="" loading="lazy" />
                                <div className="panel-text">LLBN</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project9">
                                <img className="bw-image" href="Project9" src={IMAGES.img9} alt="Project9" />
                                <div className="panel-text">DM231</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project10">
                                <img className="bw-image" href="Project10" src={IMAGES.img10} alt="Project10" />
                                <div className="panel-text">DM29</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project11">
                                <img className="bw-image" href="Project11" src={IMAGES.img11} alt="Project11" />
                                <div className="panel-text">BH71</div>
                            </a>
                        </div>
                        <div className="panel">
                            <a href="/Project12">
                                <img className="bw-image" href="Project12" src={IMAGES.img12} alt="Project12" />
                                <div className="panel-text">BHFF</div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}