import Header from "../components/header-main"
import Footer from "../components/footer"
import '../css/services.css'


export default function Services() {
    return (
        <>
            <Header />
            <main>

                <div className="services-text fade-2" style={{height: "1000px"}}>
                    <div>Створення концепцій</div>
                    <div>Арт дирекція</div>
                    <div>Проектування простору</div>
                    <div>Комплексна розробка проектної документації</div>
                    <div>Комерційна візуалізація</div>
                
                </div>
            </main>
            <Footer />
        </>
    )
}