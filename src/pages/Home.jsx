import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <h1 className="fade-1">Company Name</h1>
                <div className="content fade-3">
                    <div className="panels">
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img1.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img2.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img3.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img4.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img4.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img3.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img2.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img1.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img1.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/img2.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}