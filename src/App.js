import React from "react"
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Education from "./routes/Education"
import Experience from "./routes/Experience"
import { Route, Routes } from "react-router-dom";
import "./index.css"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/education" element={<Education/>}/>
            </Routes>
        </>
    )
}

export default App;
