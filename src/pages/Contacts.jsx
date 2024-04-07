import Header from "../components/header-main"
import '../css/contacts.css'

export default function Contacts() {
    return (
        <>
            <Header />
            <main>
                <div className="content fade-2">

                    <div className="middle">
                        <div className="textlinks">
                            <div className="vertical">
                                <div className="text">
                                    REACH OUT
                                </div>
                                <div className="line"></div>

                                <div className="links">
                                    <a href="/behance">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path d="M20 23c1 0 4-1.618 4-5.618C24 11.163 18.494 10 12.292 10 11.12 10 7.547 10.002 5 10.001c-1.657-.001-3 1.343-3 3V35c0 1.657 1.343 3 3 3l11.8 0c4.419 0 8.165-3.496 8.2-7.915C25.047 24.009 20 23 20 23zM8 15h7c1.657 0 3 1.343 3 3s-1.343 3-3 3H8V15zM15.5 33H8v-7h7.5c1.933 0 3.5 1.567 3.5 3.5S17.433 33 15.5 33zM45.51 29c.829 0 1.5-.671 1.501-1.5v0c0-5.799-4.011-10.5-10-10.5-5.523 0-10 4.701-10 10.5 0 5.799 4.477 10.5 10 10.5 4.887 0 7.602-2.286 8.928-5.643.256-.647-.246-1.348-.942-1.348h-2.401c-.365 0-.688.207-.877.52C40.805 33.039 39.41 34 37.532 34c-2.812 0-4.86-2.135-5.382-5h10.722H45.51zM37.011 21c2.077 0 4.09 1.656 4.658 4h-9.273C33.149 22.651 34.931 21 37.011 21zM41.5 15h-8c-.828 0-1.5-.672-1.5-1.5v0c0-.828.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5v0C43 14.328 42.328 15 41.5 15z"></path>
                                        </svg>
                                    </a>
                                    <a href="/instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path></svg>
                                    </a>
                                    <a href="/linkedin">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="feedback">
                            <div>We'd love to hear from you</div><br />
                            <form action="none">
                                <input type="text" id='uname' name="uname" required placeholder="Name" />
                                <input type="email" id='uemail' name='uemail' required placeholder="Email" />
                                {/* <input type="text" contentEditable={true} id='umessage' name='umessage' required placeholder="Message..." /> */}
                                <textarea name="umessage" id="umessage" cols="30" rows="3" placeholder="Message..."></textarea>
                                <input type="button" value="Send"/>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}