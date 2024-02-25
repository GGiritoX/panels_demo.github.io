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
                            <img className="bw-image" src={require("../img/01-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/02-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/03-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/04-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/05-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/06-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/07-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                        <div className="panel">
                            <img className="bw-image" src={require("../img/08-title.jpg")} alt="" />
                            <div className="text">Project</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}