import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
import Project1 from "./pages/Project1";
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
                    <Route path="/project1" element={<Project1/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}