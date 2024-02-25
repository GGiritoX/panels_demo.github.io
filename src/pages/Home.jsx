import Header from "../components/header"
import Footer from "../components/footer"

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
                                <img className="bw-image" href="Project1" src={require("../img/tiles/01-title.jpg")} alt="" />
                                <div className="text">Project</div>
                            </a>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/02-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/03-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/04-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/05-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/06-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/07-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/tiles/08-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}