import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";
import Project8 from "./pages/Project8";
import Project9 from "./pages/Project9";
import Project10 from "./pages/Project10";
import Project11 from "./pages/Project11";
import Project12 from "./pages/Project12";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/project1" element={<Project1/>}/>
                    <Route path="/project2" element={<Project2/>}/>
                    <Route path="/project3" element={<Project3/>}/>
                    <Route path="/project4" element={<Project4/>}/>
                    <Route path="/project5" element={<Project5/>}/>
                    <Route path="/project6" element={<Project6/>}/>
                    <Route path="/project7" element={<Project7/>}/>
                    <Route path="/project8" element={<Project8/>}/>
                    <Route path="/project9" element={<Project9/>}/>
                    <Route path="/project10" element={<Project10/>}/>
                    <Route path="/project11" element={<Project11/>}/>
                    <Route path="/project12" element={<Project12/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}