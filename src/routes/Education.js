import React from 'react'
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

import { SiLatex } from 'react-icons/si';
import { MatlabOriginal } from 'devicons-react';

import controllerSim from "../assets/phase controller/simulation.png"
import hardware from "../assets/phase controller/hardware.png"
import controller from "../assets/phase controller/controller.png"
import closedloop from "../assets/phase controller/closedloop.png"
import uncontrolled from "../assets/luenberger/uncontrolled.png"
import controlled from "../assets/luenberger/controlled.png"
import simulinkCircuit from "../assets/luenberger/simulink.png"
import sim from "../assets/luenberger/sim.png"
import validation from "../assets/luenberger/validation.png"

import hyp1 from "../assets/svm/hyp1.jpg"
import hyp2 from "../assets/svm/hyp2.jpg"
import hyp3 from "../assets/svm/hyp3.jpg"
import hyp4 from "../assets/svm/hyp4.jpg"
import feasibleRegion from "../assets/svm/feasibleRegionCrop.jpg"

import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Ghb from '../components/Ghb';

import "./Education.css"

const Education = () => {
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

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
        <Modal id={"controller-design-modal"} onClose={()=> handleCloseModal("controller-design-modal")}>
            <div className="carousel-holder">
                <Carousel>
                    <Carousel.Item>
                        <img className="carousel-img" src={controller} alt="controller transfer function"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={closedloop} alt="closed loop frequency response"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={controllerSim} alt="Simulated time response"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={hardware} alt="Time response on the physical system"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={uncontrolled} alt="Uncontrolled time response"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={controlled} alt="Controlled time response"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={simulinkCircuit} alt="Simulink Luenberger simulation circuit"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={sim} alt="Luenberger simulation results"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={validation} alt="Time response on the physical system"></img>
                    </Carousel.Item>
                </Carousel>
                <div style={{width: "90%"}}>
                    <p>
                        <b className="keys">Summary: </b>
                            I designed phase-lead, phase-lag and state-space controllers 
                            in addition to a Luenberger observer to stabilize the inverted pendulum system.
                    </p>
                    <p>
                        <b className="keys">Status: </b><span className="accent-text">Complete</span>. (Mar. 2022 - Apr. 2022)
                    </p>
                    <p>
                        <b className="keys">Technical Details: </b>
                        MatLab was used to streamline calculations with complex numbers and solve 
                        systems of equations. The first four carousel images depict phase lag controller design:
                        the transfer function of the designed controller, the closed loop frequency response, 
                        the simulated time response, and the observed time response when integrating the controller 
                        with the physical system via a hardware-in-the-loop setup. The next five display 
                        state space design: uncontrolled time response, controlled time response, Simulink Luenberger  
                        circuit with optional dirstubance modelling (step and sine), simulation results, and results 
                        with the real physical system in an HiL setup.
                    </p>
                    <p><b>Skills Learned: </b> Controller design in frequency domain and state-space, 
                    Luenberger observability, controllability, pole placement (eigenvalue assignment)
                    </p>
                    <Ghb repo="https://github.com/bryanfraschetti/Controller-Observer-Design"></Ghb>
                </div>
            </div>  
        </Modal>
        <Modal id={"svm-modal"} onClose={()=> handleCloseModal("svm-modal")}>
            <div className="carousel-holder">
                <Carousel>
                    <Carousel.Item>
                        <img className="carousel-img" src={hyp1} alt="First separating hyperplane to separate extreme points from interior points in a discrete point set"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={hyp2} alt="Second hyperplane and with feasible regions overlayed to illustrate mathematical intersection of regions"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={hyp3} alt="Third hyperplane"></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="carousel-img" src={hyp4} alt="Fourth hyperplane"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img" src={feasibleRegion} alt="Completely separated interior and exterior regions"></img>
                    </Carousel.Item>
                </Carousel>
                <div style={{width: "90%"}}>
                    <p>
                        <b className="keys">Summary: </b>
                            I conducted research relating to Linear Programming and SVMs under the guidance of the 
                            Mathematics and Statistics Department Head, Dr. Richard Caron.
                    </p>
                    <p>
                        <b className="keys">Status: </b><span className="accent-text">Complete</span>. (Sep. 2020 - Apr. 2021)
                    </p>
                    <p>
                        <b className="keys">Technical Details: </b>
                            I learned about extreme point identification in discrete point sets, algorithms to 
                            compute the convex hull, separate interior points from exterior points using hyperplanes, 
                            and summarized what I learned by writing reports using LaTeX. The above carousel illustrates 
                            the application of a training algorithm on a simple 2D discrete point set where each new 
                            extreme point is used to find the next extreme point and generate a new separating hyperplane. 
                            The second image shows the overlaying of two regions generated by hyperplanes to highlight 
                            that the final feasible region is a result of mathematical intersection.
                    </p>
                    <p><b>Skills Learned: </b> LP, SVM, LaTeX, separating hyperplanes, feasible regions, convex hull, 
                    linear optimization, Simplex algorithm
                    </p>
                </div>
            </div>  
        </Modal>
        <NavBar/>
        <div id='blur-on-modal'>
            <h1 className='post-nav my-header'>Summary of my <span className="accent-text">Education</span></h1>
            <div className='card-container' style={{width: "100vw"}}>
                <Card id="uow" alt="University of Windsor Campus" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body>
                        <div className="short-info" style={{justifyContent: "space-between"}}>
                            <Card.Title>University of Windsor</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; BASc. in Electrical and Computer Engineering and Minor in Mathematics
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", paddingBottom: "15px", marginBottom: "0"}}>
                                &#8226; GPA &gt; 95%
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="acs" alt="Assumption College High School Campus" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body>
                        <div className="short-info" style={{justifyContent: "space-between"}}>
                            <Card.Title>Assumption High School</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; International Baccalaureate Diploma (IB)
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", paddingBottom: "15px", marginBottom: "0"}}>
                                &#8226; Ontario Secondary School Diploma
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <h1 className='my-header' style={{marginTop: "20px"}}>Interesting <span className="accent-text"> Academic </span> Projects</h1>
            <p style={{textAlign: "center", margin: "25px 0px 10px 0px", fontWeight: 300, fontSize: "1rem"}} className='emphasized-text'>Click on any project to learn more</p>
            <div className='card-container' style={{width: "100vw"}}>
                <Card id="controller-design" alt="Background showing a system response using a controller I designed" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body onClick={()=> handleOpenModal("controller-design-modal")} onTouchStart={handleTouchStart}>
                        <div className="short-info">
                            <Card.Title>Controller Design</Card.Title>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <MatlabOriginal size={20} alt="MatLab Logo"></MatlabOriginal>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="svm" alt="Background a feasible region" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body onClick={()=> handleOpenModal("svm-modal")} onTouchStart={handleTouchStart}>
                        <div className="short-info">
                            <Card.Title>Linear Programming and SVM Research</Card.Title>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <SiLatex size={25} color="rgb(0,129,129)" alt="LaTeX Logo"></SiLatex>
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

export default Education