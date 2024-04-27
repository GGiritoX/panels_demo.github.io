import Header from "../components/header-main"
import Footer from "../components/footer"
import '../css/services.css'


export default function Services() {
    return (
        <>
            <Header />
            <main>

                <div className="services-container fade-2">
                    <div className="services-text-container">
                        WE PROVIDE
                    </div>
                    <div className="services-list-container">
                        <div className="services-list-item">
                            <div className="services-list-marker"></div>
                            Concept Creation
                        </div>
                        <div className="services-list-item">
                            <div className="services-list-marker"></div>
                            Art Direction
                        </div>
                        <div className="services-list-item">
                            <div className="services-list-marker"></div>
                            Spatial Planning
                        </div>
                        <div className="services-list-item">
                            <div className="services-list-marker"></div>
                            Full-cycle Design
                        </div>
                        <div className="services-list-item">
                            <div className="services-list-marker"></div>
                            Commercial Visualization
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}