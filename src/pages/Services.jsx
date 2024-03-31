import Header from "../components/header-project"
import Footer from "../components/footer"
import { alignPropType } from "react-bootstrap/esm/types"


export default function Services() {
    return (
        <>
            <Header />
            <main>

                <div className="text">
                    Послуги:<br />
                    - Проєктування<br />
                    - Візуалізація для девелопмента<br />
                    - Створення концепції<br />
                </div>
            </main>
            <Footer />
        </>
    )
}