
import SideMenu from "./sidemenu"
import "../css/header.css";

export default function Header() {
    return (
        <>
            <header className="fade-1 header-project">
                <div className="header-container">
                    <div className=" logoButton"> {/*position-absolute start-50 translate-middle-x*/}
                        <a className="text-decoration-none" href="/">
                            <svg width="120" height="120" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 44.5H82V46C52.7107 46 36.2893 46 7 46V44.5Z" fill="white" />
                                <path d="M44 88L44 46H45.5C45.5 71.873 45.5 62.127 45.5 88H44Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0C69.0767 0 89 19.9233 89 44.5ZM44.5 88C63.0215 88 78 68.7205 78 44.5C78 20.2795 63.0215 1 44.5 1C25.9784 1 11 20.2795 11 44.5C11 68.7205 25.9784 88 44.5 88Z" fill="#242424" />
                            </svg>

                        </a>
                    </div>
                    <div className="sideMenuButton"> {/*position-absolute end-0 bottom-50 translate-middle-x*/}
                        <SideMenu />
                    </div>
                </div>
            </header>
        </>
    )
}