import React from 'react'
import NavBar from '../components/NavBar'
import { Card } from 'react-bootstrap';
import "./Education.css"
// import { SiLatex } from 'react-icons/si';
import Footer from '../components/Footer';

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

    // const handleOpenModal = (id) => {
    //     // disableBodyScroll();
    //     const MOI = document.getElementById(id)//modal of interest
    //     MOI.style.left = "-50%"
    //     MOI.children[0].classList.toggle("active")
    //     const toBlur = document.getElementById("blur-on-modal")
    //     toBlur.style.filter = "blur(3px)"
    // };
  
    // const handleCloseModal = (id) => {
    //     const MOI = document.getElementById(id)//modal of interest
    //     MOI.style.left = "-200%";
    //     MOI.children[0].classList.toggle("active")
    //     const toBlur = document.getElementById("blur-on-modal")
    //     toBlur.style.filter = "none"
    //     // enableBodyScroll()
    // };

    // const handleTouchStart = (event) => {
    //     const containerRef = event.target.closest(".card-body")
    //     console.log(containerRef)
    //     const boundingRect = containerRef.getBoundingClientRect()
    //     const { clientX, clientY } = event.touches[0];
    
    //     const bubble = document.createElement('div');
    //     bubble.className = 'bubble';
    //     bubble.style.left = `${clientX - boundingRect.left}px`;
    //     bubble.style.top = `${clientY - boundingRect.top}px`;
    
    //     containerRef.appendChild(bubble);
    
    //     setTimeout(() => {
    //     containerRef.removeChild(bubble);
    //     }, 1000);
    // }

  return (
    <div>
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
                            <Card.Title>Assumption College High School</Card.Title>
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
            {/* <h1 style={{marginTop: "30px"}} className='my-header'><span className="accent-text">Academia Related</span> Projects</h1>
            <p style={{textAlign: "center", margin: "25px 0px 10px 0px", fontWeight: 300, fontSize: "1rem"}} className='emphasized-text'>Click on any project to learn more</p>
            <div className='card-container' style={{width: "100vw"}}>
                <Card id="SVM" alt="University of Windsor Campus" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body>
                        <div className="short-info">
                            <Card.Title>Support Vector Machine Research</Card.Title>
                            <div className='icon-list-container'>
                                <div className='devicon'>
                                    <SiLatex size={"20"} color='#008181' alt="LaTeX logo"></SiLatex>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="acs" alt="Assumption College High School Campus" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                    <Card.Body>
                        <div className="short-info">
                            <Card.Title>Assumption College High School</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; International Baccalaureate Diploma (IB)
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; Ontario Secondary School Diploma (OSSD)
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; GPA &gt; 95%
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div> */}
            <Footer></Footer>

        </div>
    </div>
  )
}

export default Education