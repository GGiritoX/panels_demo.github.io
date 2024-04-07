import Header from "../components/header-main"
import Footer from "../components/footer"
import '../css/services.css'


export default function Services() {
    return (
        <>
            <Header />
            <main>

                <div className="stext fade-2">
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