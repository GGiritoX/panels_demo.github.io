import Header from "../components/header"
import Footer from "../components/footer"
import Carousel from 'react-bootstrap/Carousel'
import IMAGES from '../img/Project1/index'

export default function Project1() {
    return (
        <>
            <Header />
            <main>

                <div className="wrapper fade-3">
                    <div className="description" onClick={(e) => {
                        var descriptionText = document.getElementById("descriptionText");
                        var fullDescription = document.getElementById("fullDescription");
                        if (fullDescription.classList.contains("hide")) { //if fulltext hide
                            descriptionText.classList.remove("show"); //remove descr tag show
                            descriptionText.classList.add("hide"); //add text descr tag hide
                            fullDescription.classList.remove("hide"); //remove fulltext tag hide
                            fullDescription.classList.add("show"); // add fulltext tag show 
                        } else {
                            fullDescription.classList.remove("show"); //remove fulltext tag show
                            fullDescription.classList.add("hide"); // add fulltext tag hide
                            descriptionText.classList.remove("hide"); //remove descr tag hide
                            descriptionText.classList.add("show"); //add text descr tag show
                        }
                    }}>
                        <div className="description-text show" id="descriptionText">About<br/>...</div>
                        <div className="description-full hide" id="fullDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas odio necessitatibus adipisci ullam, doloremque nesciunt incidunt vel, numquam maxime sapiente voluptatibus perspiciatis laborum quo quasi ut nisi reprehenderit expedita.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quos harum esse at! Possimus, ex corporis recusandae quasi ducimus eos similique ea praesentium error non deserunt, quisquam minima! Eius, quam.
                        </div>
                    </div>
                    <div className="images">
                        <Carousel fade={true}>
                            <Carousel.Item interval={5000}>
                                <img src={IMAGES.img5} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img src={IMAGES.img6} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img src={IMAGES.img9} alt="" className="d-block w-100 h-100" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="space" />
                </div>
                <div className="projectName fade-3">
                    ABCD-1234
                </div>
            </main>
            <Footer />
        </>
    )
}