import Header from "../components/header"
import Footer from "../components/footer"
import Carousel from 'react-bootstrap/Carousel'
import IMAGES from '../img/Project1/index'


export default function Project1() {
    return (
        <>
            <Header />
            <main>

                <div className="wrapper fade-2">
                    <div className="description" onClick={(e) => {
                        var descriptionText = document.getElementById("descriptionText");
                        var fullDescription = document.getElementById("fullDescription");
                        descriptionText.classList.toggle("show");
                        descriptionText.classList.toggle("hide");
                        fullDescription.classList.toggle("show");
                        fullDescription.classList.toggle("hide");
                    }}>
                        <div className="description-text show" id="descriptionText">More<br />...</div>
                        <div className="description-full hide" id="fullDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas odio necessitatibus adipisci ullam, doloremque nesciunt incidunt vel, numquam maxime sapiente voluptatibus perspiciatis laborum quo quasi ut nisi reprehenderit expedita.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quos harum esse at! Possimus, ex corporis recusandae quasi ducimus eos similique ea praesentium error non deserunt, quisquam minima! Eius, quam.
                        </div>
                    </div>
                    <div className="images">
                        <Carousel fade={true}>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -20%)' }}>
                                <img src={IMAGES.img1} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -32%)' }}>
                                <img src={IMAGES.img2} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -20%)' }}>
                                <img src={IMAGES.img3} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -50%)' }}>
                                <img src={IMAGES.img4} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -15%)' }}>
                                <img src={IMAGES.img5} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -12%)' }}>
                                <img src={IMAGES.img6} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -35%)' }}>
                                <img src={IMAGES.img7} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1.1", transform: 'translate(4%, -40%)' }}>
                                <img src={IMAGES.img8} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1.1", transform: 'translate(0%, -25%)' }}>
                                <img src={IMAGES.img9} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, -47%)' }}>
                                <img src={IMAGES.img10} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="space" />
                </div>
                <div className="projectName fade-3">
                    OLN-36B
                </div>
            </main>
            <Footer />
        </>
    )
}