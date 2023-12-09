import { Card, Carousel } from "react-bootstrap";

import { CplusplusPlain, Css3Original, DeviconsReactOriginal, GitOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain} from "devicons-react";
import { SiAntdesign, SiAutodesk, SiEagle, SiExpress, SiLtspice, SiScikitlearn } from "react-icons/si";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import librosa from "../assets/icons/librosa.png"
// import rosLogo from "../assets/icons/Ros_logo.svg";
// import kivyLogo from "../assets/icons/kivy.svg";
// import XtensorLogo from "../assets/icons/Xtensor_logo.svg";
import ReactBootstrapLogo from "../assets/icons/react-bootstrap.svg";

import SequenceHomePage from "../assets/Sequence/index.gif"
import SequenceMain from "../assets/Sequence/main-empty.png"
import SequenceUI from "../assets/Sequence/main-ui.gif"
import SequenceLoading from "../assets/Sequence/loading.gif"

import bases from "../assets/pca/basis-functions.png"
import original from "../assets/pca/original.png"
import reconstructed from "../assets/pca/reconstructed.png"

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
import Ghb from "../components/Ghb";

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
                            tokens with the Spotify API away from the client. For scalability, 
                            the tokens are transferred to the browser's local 
                            storage so that subsequent requests, barring a token refresh, can be made directly 
                            from the client to Spotify without bottlenecking my web-app. Authorization persistence 
                            across sessions is 
                            achieved through this same mechanism.
                        </p>
                        <p><b className="keys">Skills Learned: </b> Fetch API, Async/Await, Promises, XHR, OAuth, RESTful API,
                            Secure Token Management, JSON, Bootstrap
                        </p>
                        <Ghb repo="https://github.com/bryanfraschetti/Sequence"></Ghb>
                    </div>
                </div>   
            </Modal>
            <Modal id={"pca-modal"} onClose={()=> handleCloseModal("pca-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={bases} alt="Basis spectrotemporal functions I determined through pca"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={original} alt="Basis spectrotemporal functions I determined through pca"></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={reconstructed} alt="Basis spectrotemporal functions I determined through pca"></img>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                            Inspired by Spotify's audio analysis endpoint,
                            <a href="https://developer.spotify.com/documentation/web-api/reference/get-audio-analysis" className="accent-text"> see here</a>, 
                            I decided to try and replicate their work. The objective was to compute spectrograms from music audio files, 
                            <span className="accent-text"> decompose </span> 
                            the songs 
                            into short segments upon which PCA could be performed, and finally extract 
                            <span className="accent-text"> spectrotemporal </span> surface feature
                            <span className="accent-text"> bases</span>.
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Complete</span> (Nov. 2023)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            It is widely known that the Fourier Transform is a powerful tool to compute the frequency composition of 
                            a signal. However, while this can be useful for macroscopic properties of an audio file, all temporal information 
                            is lost. The approach to solve this issue is to break the signal into overlapping frames, 
                            applying a Hann window to each frame to mitigate spectral leakage, and then applying the 
                            DFT locally. This process is called the Short-Time Fourier Transform, and is useful because it 
                            maintains frequency and time resolution that can easily be modified by changing the frame size.
                        </p>
                        <p>
                            Each STFT represents an (approximately) instantaneous frequency representation and the concatenation 
                            of consecutive STFTs captures the evolution of the frequency distribution through time. This is called a spectrogram. 
                            Humans generally perceive audio in 50ms chunks,
                            <a href="https://web.media.mit.edu/~tristan/phd/dissertation/chapter3.html#x1-350003.3" target="_blank" rel="noreferrer" className="accent-text"> see source</a>, 
                            and so it is logical to concatenate a number of STFTs such that the amount of time they cumulatively occupy is approximately 50ms. 
                            Such a spectrogram would represent a single perceived sonic event. Dividing the computed spectrograms into 
                            such segments allows for the comparison of sonic events via Principal Component Analysis by extracting 
                            the fundamental features that comprise the segments. Using 60 songs, amounting to approximately 
                            12,000,000 segments, I applied PCA and produced the spectrograms above, which are 
                            extremely similar to the basis functions that Spotify produced (which can be seen under the timbre section 
                            at the Spotify endpoint I linked at the beginning of this section). 
                            It is worth noting that the 3 dimensional surfaces (2D matrices) corresponding to the segments 
                            were flattened to produce 1 dimensional vectors upon which PCA was performed. The resultant basis vectors were then 
                            reshaped back into the segment shape for visualization.
                        </p>
                        <p>
                            Additionally, to benchmark the performance of my approach, I created a script that reconstructs 
                            songs using my basis functions. This process involves decomposing a song into segments, 
                            calculating the segment projection onto each basis function, 
                            computing the linear combination of projections, 
                            recombining the segments, then comparing the reconstruction 
                            with the original signal under different error metrics. 
                            Using only the 12 basis functions, which is effectively 
                            equivalent to using 12 fundamental sounds, I was 
                            able to reconstruct entire songs with an RMSE (root mean squared error) of only 4.2dB and 
                            MAE (mean absolute error) of 2.2dB. The carousel shows an original song 
                            and its reconstruction.
                        </p>
                        <p><b>Skills Learned: </b>  Windowing, STFT, PCA
                            <Ghb repo="https://github.com/bryanfraschetti/audio-analysis"></Ghb>
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
                        <p><b className="keys">Status: </b><span className="accent-text">Complete</span> (Jan. 2023 - Aug. 2023)</p>
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
                            for thread management, synchronization, and communication between nodes. Unfortunately, the work 
                            itself is protected and the repository cannot be shared.
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
                            <b className="keys">Status: </b><span className="accent-text">Indefinite</span> work in progress (Est. Nov. 2023)
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
                        <Ghb repo="https://github.com/bryanfraschetti/bryanfraschetti.github.io"></Ghb>
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
                            <b className="keys">Status: </b><span className="accent-text">Complete</span> (Oct. 2022 - Dec. 2022)
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
                                    <div className="devicon">
                                        <ReactOriginal size={20} alt="ReactJs"></ReactOriginal>
                                    </div>
                                    <div className="devicon">
                                        <SiAntdesign size={20} alt="ReactJs"></SiAntdesign>
                                    </div>
                                    <div className='devicon'>
                                        <JavascriptOriginal size="20"></JavascriptOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <Html5Original size={"20"} alt="HTML"></Html5Original>
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS"></Css3Original>
                                    </div>
                                    {/* <div className='devicon'>
                                        <FaBootstrap size={"20"} color="#563d7c" alt="Bootstrap"></FaBootstrap>
                                    </div> */}
                                    <div className='devicon'>
                                        <GitOriginal size={"20"} alt="Git"></GitOriginal>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="gesture-recognition" alt="Background image showing data points used in analysis" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("gesture-recognition-modal")} onTouchStart={handleTouchStart}> <div className='short-info'>
                                <Card.Title>Hands-Free Gesture Recognition</Card.Title>
                                <div className='icon-list-container'>
                                    <div>
                                        {/*
                                        weird devicons bug where both python and matlab use url(#a) and url(#b)
                                        for svg styling. whichever is first in dom takes priority

                                        forced to overwrite python colors since their logo
                                        colours are publicly available and matlabs arent

                                        therefore i have to load matlab first, but if i do display none it never renders
                                        and updates the urls so i have to render it as size 0
                                        */}
                                        <MatlabOriginal size={0} alt="MATLAB"></MatlabOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python" className="python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <CplusplusPlain size={"20"} alt="C++"></CplusplusPlain>
                                    </div>
                                    <div>
                                        <MatlabOriginal size={20} alt="MATLAB"></MatlabOriginal>
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
                                    {/*<div className='devicon'>
                                        <img src={ kivyLogo } alt="Kivy" style={{ height: 20, backgroundColor: "white", borderRadius: "10px"}}></img>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ XtensorLogo } alt="xTensor" style={{ height: 15 }}></img>
                                    </div>
                                    <div className='devicon'>
                                        <img src={ rosLogo } alt="ROS" style={{ height: 15, backgroundColor: "white", borderRadius: "2px"}}></img>
                                    </div> */}
                                    <div className='devicon'>
                                        <UbuntuPlain size={"20"} alt="Ubuntu"></UbuntuPlain>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="PCA" alt="Basis Spectrotemporal Surface Functions Determined through PCA" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("pca-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Spectrogram PCA</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={20} alt="Python logo" className="python"></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={librosa} style={{height: "25px", width: "25px"}} alt="Librosa logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <NumpyOriginal size={"20"} alt="NumPy"></NumpyOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiScikitlearn size={25} alt="SciKit Learn Logo"></SiScikitlearn>
                                    </div>
                                    <div className='devicon'>
                                        <FaGithub size={"20"} style={{color: '#6e5494'}} alt="GitHub"></FaGithub>
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
                                        <JavascriptOriginal size="20"></JavascriptOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS"></Css3Original>
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
                                        <SiLtspice size={20} color="red" alt="LTSpice logo"></SiLtspice>
                                    </div>
                                    <div className='devicon'>
                                        <SiAutodesk size={20} alt="AutoDesk Logo"></SiAutodesk>
                                    </div>
                                    <div className='devicon'>
                                        <SiEagle size={20} color="orange" alt="Eagle"></SiEagle>
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