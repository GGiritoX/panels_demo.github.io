import Header from "../components/header-project"
import Footer from "../components/footer"
import Carousel from 'react-bootstrap/Carousel'
import IMAGES from '../img/Project1/index'


export default function Project1() {
    const textSwitch = () => {
        var descriptionText = document.getElementById("descriptionText");
        var fullDescription = document.getElementById("fullDescription");
        descriptionText.classList.toggle("show");
        descriptionText.classList.toggle("hide");
        fullDescription.classList.toggle("show");
        fullDescription.classList.toggle("hide");
    };
    return (
        <>
            <Header />
            <main>
                <div className="wrapper fade-2">
                    <div className="description" onClick={textSwitch}>
                        <div className="description-text show" id="descriptionText">More<br />...</div>
                        <div className="description-full hide" id="fullDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas odio necessitatibus adipisci ullam, doloremque nesciunt incidunt vel, numquam maxime sapiente voluptatibus perspiciatis laborum quo quasi ut nisi reprehenderit expedita.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quos harum esse at! Possimus, ex corporis recusandae quasi ducimus eos similique ea praesentium error non deserunt, quisquam minima! Eius, quam.
                        </div>
                    </div>
                    <div className="images">
                        <Carousel fade={true} /* indicators={false}*/ controls={false}>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img1} alt="" /> {/*className="d-block w-100 h-100" */}
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img2} alt=""/>
                                <img src={IMAGES.img2_2} alt=""/>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img3} alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img4} alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img5} alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img6} alt=""/>
                                <img src={IMAGES.img6_2} alt=""/>
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img7} alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000} style={{ scale: "1", transform: 'translate(0%, 0%)' }}>
                                <img src={IMAGES.img8} alt="" />
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