
import SideMenu from "../components/sidemenu"


export default function Header() {
    return (
        <>
            <header className="fade-2">
                <div>
                    <div className="position-absolute top-50 start-50 translate-middle logoButton">
                        <a className="text-decoration-none" href="/">SiteLogo</a>
                    </div>
                    <div className="position-absolute end-0 translate-middle sideMenuButton">
                        <SideMenu/>
                    </div>
                </div>
            </header>
        </>
    )
}