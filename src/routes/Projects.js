import { Card, Carousel } from "react-bootstrap";
import { CplusplusPlain, Css3Original, DeviconsReactOriginal, GitOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain} from "devicons-react";
import { SiAutodesk, SiEagle, SiExpress, SiLtspice } from "react-icons/si";
import { FaBootstrap, FaGithub, FaNodeJs } from "react-icons/fa";

import rosLogo from "../assets/icons/Ros_logo.svg";
import kivyLogo from "../assets/icons/kivy.svg";
import XtensorLogo from "../assets/icons/Xtensor_logo.svg";
import ReactBootstrapLogo from "../assets/icons/react-bootstrap.svg";

import SequenceHomePage from "../assets/Sequence/index.gif"
import SequenceMain from "../assets/Sequence/main-empty.png"
import SequenceUI from "../assets/Sequence/main-ui.gif"
import SequenceLoading from "../assets/Sequence/loading.gif"

import kf from "../assets/hfgr/kf.gif"
import ks from "../assets/hfgr/ks.gif"
import transientKF from "../assets/hfgr/transient-kf.png"
import transientKS from "../assets/hfgr/transient-ks.png"
import features from "../assets/hfgr/features.gif"
import lossCurve from "../assets/hfgr/loss-curve.jpg"
import accCurve from "../assets/hfgr/accuracy-curve.jpg"
import variance from "../assets/hfgr/variance.png"

import portfolioHome from "../assets/portfolio/home.png"
import aboutMe from "../assets/portfolio/aboutme.png"
import projects from "../assets/portfolio/projects.png"
import THIS from "../assets/portfolio/this.png"

import circuit from "../assets/fsae/circuit.png"
import eagle from "../assets/fsae/eagle.png"
import annotatedPlot from "../assets/fsae/Annotated Plot.png"

import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

import "./Projects.css";

const Projects = () => {
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    // let scrollPosition;

    // const disableBodyScroll = () => {
    //     scrollPosition = window.scrollY;
    //     document.body.style.position = 'fixed';
    //     document.body.style.top = `-${scrollPosition}px`;
    // };

    // const enableBodyScroll = () => {
    //     document.body.style.position = '';
    //     document.body.style.top = '';
    //     window.scrollTo({top: scrollPosition, left: 0, behavior: "instant"});
    // };

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
        // disableBodyScroll();
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
        // enableBodyScroll()
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

            <Modal id={"sequence-modal"} onClose={()=> handleCloseModal("sequence-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={SequenceHomePage} alt="Home Page of an App I designed, called Sequence"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={SequenceMain} alt="Main Page of the app"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={SequenceUI} alt="Sequence's UI"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={SequenceLoading} alt="Loading Animation"></img>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Summary: </b>
                            Sequence is a web-app that I built which uses the Spotify API to 
                            <span className="sequence-accent-text"> empower users </span>
                            with the ability to reorganize, or <i>
                            <span className="sequence-accent-text">resequence</span></i>,
                            their playlists based on 
                            <span className="sequence-accent-text"> music theory</span> and feature similarity.
                        </p>
                        <p><b className="keys">Status: </b><span className="sequence-accent-text"> Under Development</span>. 
                            (Apr. 2022 - ?)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            The server uses NodeJS and ExpressJS
                            to securely generate, exchange, and refresh
                            tokens with the Spotify API away from the client. For scalability
                            {/* <span className="sequence-accent-text"></span> */}
                            , the tokens are transferred to the browser's local 
                            storage so that subsequent requests, barring a token refresh, can be made directly 
                            from the client to Spotify without bottlenecking my web-app. Authorization persistence is
                            achieved through this same mechanism.
                        </p>
                        <p><b className="keys">Skills Learned: </b> Fetch API, Async/Await, Promises, XHR, OAuth, RESTful API,
                            Secure Token Management, JSON, Bootstrap
                        </p>
                    </div>
                </div>   
            </Modal>
            <Modal id={"gesture-recognition-modal"} onClose={()=> handleCloseModal("gesture-recognition-modal")}>     
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={kf} alt="Kick forward recognition"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={ks} alt="Kick sideways recognition"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={transientKF} alt="Plot of kick forward where colour represents time"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={transientKS} alt="Plot of kick forward where colour represents time"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={features} alt="Plot of some of the feature space"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={variance} alt="Plot of some other"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={accCurve} alt="Plot of the training accuracy curve"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={lossCurve} alt="Plot of training loss curve"></img>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Summary: </b>
                            My <span className="accent-text">capstone </span> project, wherein my team and I 
                            integrated a mmWave radar with a camera in a <span className="accent-text">closed-loop 
                            feature-based</span> recognition algorithm to successfully identify 
                            hands-free gestures, such as 
                            kicking forward and sideways, at a rate of <span className="accent-text"><b>90%</b></span>. 
                            The target industry application is 
                            <span className="accent-text"> improving </span>
                            hands-free trunk opening capabilities by repurposing 
                            the various sensors on a car and
                            <span className="accent-text"> leveraging </span>
                            their advantages.
                        </p>
                        <p><b className="keys">Status: </b><span className="accent-text">Complete</span>. (Jan. 2023 - Aug. 2023)</p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            Broadly speaking, separate threads were executed in
                            parallel for the processing of data from 
                            each sensor. The radar data was passed through a TensorFlow Keras
                            <span className="accent-text"> neural net</span>, that I designed 
                            and trained based on features that exhibited strong
                            <span className="accent-text"> clustering </span>by gesture class. The camera
                            prediction involved
                            <span className="accent-text"> object tracking </span>with OpenCV followed by trajectory comparison through 
                            appropriating and repurposing the Needleman-Wunsch Algorithm, which is normally used for gene 
                            sequencing. Based on certain features, <span className="accent-text"> SNR</span>, and prediction confidence, the results of radar and 
                            camera were synthesized into one coherent prediction, displayed on a Kivy GUI. ROS was used 
                            for thread management, synchronization, and communication between nodes.
                        </p>
                        <p><b>Skills Learned: </b> Feature Extraction, Neural Net Architecture, Early Stopping, 
                            Edge Detection, Background Subtraction, Morphological Operations, ROS framework,
                            Ubuntu Shell
                        </p>
                    </div>
                </div>   
            </Modal>
            <Modal id={"my-site-modal"} onClose={()=> handleCloseModal("my-site-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={portfolioHome} alt="Home page of my portfolio site"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={aboutMe} alt="About me section of portfolio site"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={projects} alt="Project section of portfolio site"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={THIS} alt="This section of my portfolio site"></img>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                            I built a <span className="accent-text">responsive</span> portfolio website to showcase my abilities and experience
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Indefinite</span> work in progress. (Est. Nov. 2023)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            The responsive design was achieved through React and React Bootstrap component libraries. 
                            CSS was used for fine-tuning standard components to <span className="accent-text"> my 
                            vision</span>, and gsap was used for some 
                            <span className="accent-text"> custom</span> animations. Other animations such as the typing on the homepage was developed using
                            custom React hooks. Git was used for version management, while <span className="accent-text"> delployments </span> were made via 
                            Github Pages.
                        </p>
                        <p><b>Skills Learned: </b> React, Version Management, Deployment, Principles of Responsive Design
                        </p>
                    </div>
                </div>  
            </Modal>
            <Modal id={"FSAE-modal"} onClose={()=> handleCloseModal("FSAE-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={eagle} alt="PCB Design in Eagle"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={circuit} alt="LTspice Circuit Used for Testing"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={annotatedPlot} alt="Plot of Simulation Testing the Circuit"></img>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                            A teammate and I designed the Brake Systems Plausibility Device (BSPD) circuit for 
                            the University of Windsor Formula Electric team.
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Complete</span>. (Oct. 2022 - Dec. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            The BSPD is a standalone <span className="accent-text"> non-programmable </span> safety circuit with 
                            <span className="accent-text"> fault detection </span> that sends a shutdown signal to the engine when there is a 
                            simultaneous demand for high power delivery to the engine and hard braking
                            that lasts longer than 0.5 seconds. The brake pressure was converted into a voltage 
                            using a pressure sensor, while power delivery was determined using a hall effect current sensor.
                            A comparator was used to compare real-time signals against pre-determined thresholds to 
                            produce a binary output. If both of these signals exceed their limits a capacitor whose 
                            time constant is 0.1s (steady state achieved after 0.5s) begins charging. The voltage of the 
                            capacitor is compared against its expected steady state to produce the signal sent to the engine.
                            Additionally, the circuit offers <span className="accent-text"> open and short circuit 
                            protection  </span> that triggers engine shutdown.
                        </p>
                        <p><b>Skills Learned: </b>  LTSpice, Eagle, Interfacing analog and digital circuitry
                        </p>
                    </div>
                </div>  
            </Modal>
            <NavBar />
            <div id='blur-on-modal'>
                <h1 className='post-nav my-header'><span className="accent-text">Self-Directed </span>Projects</h1>
                <p style={{textAlign: "center", margin: "25px 0px 10px 0px", fontWeight: 300, fontSize: "1rem"}} className='emphasized-text'>Click on any project to learn more</p>
                <div className='card-container' style={{width: "100vw"}}>
                    <Card id="Sequence" alt="Background image showing a page of the website" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("sequence-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Sequence</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <FaNodeJs size={"20"} alt="NodeJS" style={{color: "#6cc24a"}}></FaNodeJs>
                                    </div>
                                    <div className="devicon">
                                        <SiExpress size={"20"} alt="ExpressJS" style={{backgroundColor: "white", borderRadius: "4px", color: "black", padding: "0px 1px"}}></SiExpress>
                                    </div>
                                    <div className='devicon'>
                                        <JavascriptOriginal size="20"></JavascriptOriginal>
                                        {/* <BiLogoJavascript size={"24px"} alt="Javascript" style={{color: "#f7df1e"}}></BiLogoJavascript> */}
                                    </div>
                                    <div className='devicon'>
                                        <Html5Original size={"20"} alt="HTML"></Html5Original>
                                        {/* <FaHtml5 size={"22"} alt="HTML" style={{color: "#e34c26"}}></FaHtml5> */}
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS"></Css3Original>
                                        {/* <IoLogoCss3 size={"22"} alt="CSS" style={{color: "#2965f1"}}></IoLogoCss3> */}
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
                                <Card.Title>Hands-Free Gesture Recognition</Card.Title>
                                <div className='icon-list-container'>
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
                                <Card.Title>Portfolio Website</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <ReactOriginal size={"20"} alt="React"></ReactOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ ReactBootstrapLogo } alt="React Bootstrap" style={{ height: 20 }}></img>
                                    </div>
                                    <div className='devicon'>
                                        <DeviconsReactOriginal size={"20"} alt="Dev Icons"></DeviconsReactOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS"></Css3Original>
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
                    <Card id="FSAE" alt="Circuit I designed" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("FSAE-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>FSAE Circuit Design</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <SiLtspice size={20} color="red"></SiLtspice>
                                    </div>
                                    <div className='devicon'>
                                        <SiAutodesk size={20}></SiAutodesk>
                                    </div>
                                    <div className='devicon'>
                                        <SiEagle size={20} color="orange"></SiEagle>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Projects