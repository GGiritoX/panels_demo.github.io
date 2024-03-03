import Header from "../components/header"
import Footer from "../components/footer"
import IMAGES from '../img/tiles/index'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <h1 className="fade-1 title">Projects</h1>
                <div className="content fade-3">
                    <div className="panels">
                        <div className="panel">
                            <a href="Project1">
                                <img className="bw-image" href="Project1" src={IMAGES.img1} alt="" />
                                <div className="text">OLN-36B</div>
                            </a>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img2} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img3} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img4} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img5} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img6} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img7} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={IMAGES.img8} alt="" />
                            <div className="text">Project</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}