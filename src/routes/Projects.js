import NavBar from "../components/NavBar";
import { Card } from "react-bootstrap";
import {
    CplusplusPlain,
    Css3Original,
    DeviconsReactOriginal,
    GitOriginal,
    Html5Original,
    JavascriptOriginal,
    MatlabOriginal,
    NumpyOriginal,
    OpencvOriginal,
    PythonOriginal,
    ReactOriginal,
    TensorflowOriginal,
    UbuntuPlain,
} from "devicons-react";
import rosLogo from "../assets/Ros_logo.svg";
import kivyLogo from "../assets/kivy.svg";
import XtensorLogo from "../assets/Xtensor_logo.svg";
import Footer from "../components/Footer";
import "./Projects.css";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import Modal from "../components/Modal";
// import Example from "../components/example";

const Projects = () => {
    function handleHover(event){
        const element = event.target.closest(".my-card")
        element.classList.toggle('hovered');
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.style.filter = item.classList.contains("hovered") ? "none" : "blur(3px)"            
        });
    }

    function handleUnhover(event){
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.classList.remove("hovered")
            item.style.filter = "none"            
        });
    }


    const handleOpenModal = (id) => {
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-50%"
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "blur(3px)"
    };
  
    const handleCloseModal = (id) => {
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-200%";
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "none"
    };


    const handleTouchStart = (event) => {
        const containerRef = event.target.closest(".card-body")
        console.log(containerRef)
        const boundingRect = containerRef.getBoundingClientRect()
        const { clientX, clientY } = event.touches[0];
    
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${clientX - boundingRect.left}px`;
        bubble.style.top = `${clientY - boundingRect.top}px`;
    
        containerRef.appendChild(bubble);
    
        setTimeout(() => {
        containerRef.removeChild(bubble);
        }, 1000);
    }


    return (
        <div>
            <Modal id={"gesture-recognition-modal"} onClose={()=> handleCloseModal("gesture-recognition-modal")}>jibijabe</Modal>
            <Modal id={"sequence-modal"} onClose={()=> handleCloseModal("sequence-modal")}>jabagogo</Modal>
            <Modal id={"my-site-modal"} onClose={()=> handleCloseModal("my-site-modal")}>kapapa</Modal>
            <NavBar />
            <div id='blur-on-modal'>
                <h1 className='post-nav my-header'>Self Directed Projects</h1>
                <p style={{textAlign: "center", margin: "25px 0px 10px 0px", fontWeight: 300, fontSize: "1rem"}} className='emphasized-text'>Click on any project to learn more</p>
                <div className='card-container' style={{width: "100vw"}}>
                    <Card id="Sequence" alt="Background image showing a page of the website" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("sequence-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Sequence</Card.Title> {/* <div id="cta">&#8226; Click to Learn More</div> */} {/* <Card.Text> Built a web-app that uses the Spotify API to reorganize and publish user playlists based on music theory and feature similarity </Card.Text>
                                <Card.Text> Languages Used: Javascript, HTML, CSS </Card.Text>
                                <Card.Text> Skills Learned: Fetch API, Async/Await, Promises, XHR, OAuth, RESTful API, Secure Token Management, JSON, Bootstrap </Card.Text> */} <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <JavascriptOriginal size={"20"} alt="Javascript"></JavascriptOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <Html5Original size={"20"} alt="HTML"></Html5Original>
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS"></Css3Original>
                                    </div>
                                    <div className='devicon'>
                                        <FaBootstrap size={"20"} color="#563d7c" alt="Bootstrap"></FaBootstrap>
                                    </div>
                                    <div className='devicon'>
                                        <GitOriginal size={"20"} alt="Git"></GitOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="gesture-recognition" alt="Background image showing data points used in analysis" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("gesture-recognition-modal")} onTouchStart={handleTouchStart}> <div className='short-info'>
                                <Card.Title>Gesture Recognition</Card.Title> {/* <div id="cta">&#8226; Click to Learn More</div> */} {/* <Card.Text> Developed a closed-loop feature-based gesture recognition algorithm with an accuracy of approximately 85% using camera and mmWave radar </Card.Text>
                                <Card.Text> Languages Used: Python, C++, MATLAB </Card.Text>
                                <Card.Text> Skills Learned: TensorFlow, NumPy, OpenCV, Kivy, xTensor, ROS, Ubuntu </Card.Text> */} <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <CplusplusPlain size={"20"} alt="C++"></CplusplusPlain>
                                    </div>
                                    <div className='devicon'>
                                        <MatlabOriginal size={"20"} alt="MATLAB"></MatlabOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <TensorflowOriginal size={"20"} alt="TensorFlow"></TensorflowOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <NumpyOriginal size={"20"} alt="NumPy"></NumpyOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <OpencvOriginal size={"20"} alt="OpenCV"></OpencvOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ kivyLogo } alt="Kivy" style={{ height: 20, backgroundColor: "white", borderRadius: "10px"}}></img>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ XtensorLogo } alt="xTensor" style={{ height: 15 }}></img>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ rosLogo } alt="ROS" style={{ height: 15, backgroundColor: "white", borderRadius: "2px"}}></img>
                                    </div>
                                    <div className='devicon'>
                                        <UbuntuPlain size={"20"} alt="Ubuntu"></UbuntuPlain>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="my-site" alt="Background image showing the home page of this website" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("my-site-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Portfolio Website</Card.Title> {/* <Card.Text> Built a website to showcase the skills which I have learned through self-directed projects, employment, and school </Card.Text>
                                <Card.Text> Languages Used: Javascript (JSX), HTML, CSS </Card.Text>
                                <Card.Text> Skills Learned: ReactJS, React-Bootstrap, Devicons React, CI/CD Pipeline </Card.Text> */} <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <ReactOriginal size={"20"} alt="React"></ReactOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <DeviconsReactOriginal size={"20"} alt="Dev Icons"></DeviconsReactOriginal>
                                    </div>
                                </div> {/* <div id="cta">&#8226; Click to Learn More</div> */}
                            </div>
                        </Card.Body>
                    </Card>
                </div> {/* <div className='card-container post-nav'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Sensor Fusion Approach to Gesture Recognition</Card.Title>
                            <Card.Text> Developed a closed-loop feature-based gesture recognition algorithm with an accuracy of approximately 85% using camera and mmWave radar </Card.Text>
                            <Card.Text> Languages Used: Python, C++, MATLAB </Card.Text>
                            <Card.Text> Skills Learned: TensorFlow, NumPy, OpenCV, Kivy, xTensor, ROS, Ubuntu </Card.Text>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <PythonOriginal size={"20"}></PythonOriginal>
                                </div>
                                <div className='devicon'>
                                    <CplusplusPlain size={"20"}></CplusplusPlain>
                                </div>
                                <div className='devicon'>
                                    <MatlabOriginal size={"20"}></MatlabOriginal>
                                </div>
                                <div className='devicon'>
                                    <TensorflowOriginal size={"20"}></TensorflowOriginal>
                                </div>
                                <div className='devicon'>
                                    <NumpyOriginal size={"20"}></NumpyOriginal>
                                </div>
                                <div className='devicon'>
                                    <OpencvOriginal size={"20"}></OpencvOriginal>
                                </div>
                                <div className='devicon'>
                                    <img src={ kivyLogo } alt="logo" style={{ height: 20 }}></img>
                                </div>
                                <div className='devicon'>
                                    <img src={ XtensorLogo } alt="logo" style={{ height: 20 }}></img>
                                </div>
                                <div className='devicon'>
                                    <img src={ rosLogo } alt="logo" style={{ height: 20 }}></img>
                                </div>
                                <div className='devicon'>
                                    <UbuntuPlain size={"20"}></UbuntuPlain>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Sequence</Card.Title>
                            <Card.Text> Built a web-app that uses the Spotify API to reorganize and publish user playlists based on music theory and feature similarity </Card.Text>
                            <Card.Text> Languages Used: Javascript, HTML, CSS </Card.Text>
                            <Card.Text> Skills Learned: Fetch API, Async/Await, Promises, XHR, OAuth, RESTful API, Secure Token Management, JSON, Bootstrap </Card.Text>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <JavascriptOriginal size={"20"}></JavascriptOriginal>
                                </div>
                                <div className='devicon'>
                                    <Html5Original size={"20"}></Html5Original>
                                </div>
                                <div className='devicon'>
                                    <Css3Original size={"20"}></Css3Original>
                                </div>
                                <div className='devicon'>
                                    <BootstrapOriginal size={"20"}></BootstrapOriginal>
                                </div>
                                <div className='devicon'>
                                    <GitOriginal size={"20"}></GitOriginal>
                                </div>
                                <div className='devicon'>
                                    <GithubOriginal size={"20"}></GithubOriginal>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Portfolio Website</Card.Title>
                            <Card.Text> Built a website to showcase the skills which I have learned through self-directed projects, employment, and school </Card.Text>
                            <Card.Text> Languages Used: Javascript (JSX), HTML, CSS </Card.Text>
                            <Card.Text> Skills Learned: ReactJS, React-Bootstrap, Devicons React, CI/CD Pipeline </Card.Text>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <ReactOriginal size={"20"}></ReactOriginal>
                                </div>
                                <div className='devicon'>
                                    <DeviconsReactOriginal size={"20"}></DeviconsReactOriginal>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div> */} <Footer></Footer>
            </div>
        </div>
    )
}

export default Projects