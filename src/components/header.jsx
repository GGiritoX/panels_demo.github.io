
import SideMenu from "../components/sidemenu"


export default function Header() {
    return (
        <>
            <header className="fade-2">
                <div className="logoButton">
                    <a className="text-decoration-none" href="/">Site Logo</a>
                </div>
                <div className="sideMenuButton">
                    <SideMenu/>
                </div>
            </header>
        </>
    )
}