import Header from "../components/header-main"
import Footer from "../components/footer"

export default function Contacts() {
    return (
        <>
            <Header />
            <main>
                <h1 className="fade-2 title">Contacts</h1>
                <div className="content fade-3">
                    <div className="vertical">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                            </svg>
                            LinkedIn
                        </a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                            </svg>
                            Instagram
                        </a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                                <path fill="#060000" d="M43.462,52H20.538c-2.28,0-4.424-0.888-6.037-2.5C12.889,47.887,12,45.743,12,43.461V20.539 c0-2.281,0.889-4.426,2.501-6.038c1.613-1.612,3.757-2.5,6.037-2.5h22.924c2.28,0,4.424,0.888,6.037,2.5 C51.111,16.113,52,18.257,52,20.539v22.923c0,2.281-0.889,4.426-2.501,6.038C47.886,51.112,45.742,52,43.462,52z M20.538,16 c-1.212,0-2.352,0.472-3.209,1.33C16.472,18.186,16,19.326,16,20.539v22.923c0,1.213,0.472,2.353,1.329,3.209 c0.857,0.857,1.997,1.33,3.209,1.33h22.924c1.212,0,2.352-0.472,3.209-1.33C47.528,45.814,48,44.674,48,43.461V20.539 c0-1.213-0.472-2.353-1.329-3.209C45.813,16.472,44.674,16,43.462,16H20.538z"></path><path d="M43.487,24.999h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h6c0.553,0,1,0.448,1,1S44.04,24.999,43.487,24.999z"></path><path fill-rule="evenodd" d="M28.793,31.345c0.951,0.326,2.695,1.252,2.695,4.081	c0,4.384-4.756,4.573-5.39,4.574h-7.61V23.999h7.293c0.792,0,4.707-0.134,4.707,4C30.488,30.197,29.426,31.019,28.793,31.345z M22.488,26.999v3h2.619c0.357,0,1.547-0.226,1.547-1.565c0-1.34-1.548-1.435-1.785-1.435H22.488z M25.418,36.981	c0.254,0,2.037-0.098,2.037-1.916c0-1.82-1.401-2.065-2.037-2.065h-2.93v3.981H25.418z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M43.141,36h3.182c-0.563,1.868-2.591,3.999-5.667,3.999	c-2.028,0-6.169-1.127-6.169-6.5c0-5.807,4.479-6.5,6-6.5c5.375,0,6.125,4.5,6,8c0,0,0,0.001,0,0.001h-2.68c0,0,0-0.001,0-0.001	h-5.321c0,0,0.512,1.982,2.512,1.982C41.99,36.981,42.688,36.493,43.141,36z M40.573,29.6c-1.326-0.023-2.823,1.15-2.788,2.4h5.408	c-0.085-0.775-0.338-1.394-0.761-1.781C42.01,29.832,41.498,29.616,40.573,29.6z" clip-rule="evenodd"></path>
                            </svg>
                            Behind</a>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                <path d="M 5.5 7 C 3.03125 7 1.011719 9.015625 1 11.484375 C 1 11.484375 1 11.488281 1 11.492188 C 1 11.496094 1 11.496094 1 11.5 L 1 38.5 C 1 40.972656 3.027344 43 5.5 43 L 44.5 43 C 46.972656 43 49 40.972656 49 38.5 L 49 11.5 C 49 11.496094 49 11.496094 49 11.492188 C 49 11.488281 49 11.484375 49 11.484375 C 48.988281 9.015625 46.96875 7 44.5 7 Z M 8.101563 9 L 41.902344 9 L 25 20.78125 Z M 4.773438 9.117188 L 25 23.21875 L 45.230469 9.117188 C 46.253906 9.425781 46.992188 10.355469 47 11.488281 C 46.996094 11.699219 46.78125 12.121094 46.46875 12.460938 C 46.152344 12.804688 45.84375 13.019531 45.84375 13.019531 L 45.839844 13.027344 L 25 27.777344 L 4.160156 13.027344 L 4.15625 13.019531 C 4.15625 13.019531 3.847656 12.804688 3.53125 12.460938 C 3.21875 12.121094 3.003906 11.699219 3 11.488281 C 3.007813 10.355469 3.746094 9.425781 4.773438 9.117188 Z M 3 14.652344 C 3 14.652344 3.007813 14.660156 3.007813 14.660156 L 3.015625 14.664063 L 3.015625 14.667969 L 6 16.777344 L 6 41 L 5.5 41 C 4.109375 41 3 39.890625 3 38.5 Z M 47 14.652344 L 47 38.5 C 47 39.890625 45.890625 41 44.5 41 L 44 41 L 44 16.777344 L 46.984375 14.667969 L 46.984375 14.664063 C 46.984375 14.664063 47 14.652344 47 14.652344 Z M 8 18.191406 L 25 30.222656 L 42 18.191406 L 42 41 L 8 41 Z"></path>
                            </svg>
                            my_email@gmail.com</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}