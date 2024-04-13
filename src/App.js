import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
// import Project1 from "./pages/Project1";
// import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/services" element={<Services/>}/>
                    {/* <Route path="/project1" element={<Project1/>}/> */}
                    {/* <Route path="/project2" element={<Project2/>}/> */}
                    <Route path="/project3" element={<Project3/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}