import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import RevealComponent from '../components/revealComponent'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import { FaGithub, FaServer } from 'react-icons/fa'
import { GiBrainstorm } from 'react-icons/gi'
import { Element } from 'react-scroll'
import { LiaPencilRulerSolid } from 'react-icons/lia'
import "./Home.css"
import { CplusplusPlain, ExpressOriginal, GitOriginal, JavascriptOriginal, MatlabOriginal, MysqlOriginal, NginxOriginal, NodejsOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, ReactOriginal, TensorflowLine, VscodeOriginal } from 'devicons-react'
import gsap from 'gsap'

const Home = () => {

    useEffect(() => {
        gsap.to(":root", {
          duration: 2.5,
          "--rotate": 360,
          repeat: -1,
          ease: "linear",
        });
    
    
    }, []);

  return (
    <div>
        <NavBar />
        <Hero />
        <Element id="about-me" name="about-me" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{margin:"60px 0px 20px 0px", fontSize: "2rem"}}>Experience I
                <span className='accent-text' style={{fontSize: "2.2rem"}}> Offer</span>
            </div>
            <div className='card-container' style={{margin:"0px"}}>
                <Card className='attribute-card'>
                    <FaServer size={70}></FaServer>
                    <p className='attribute-text'>Server Side Development</p>
                </Card>
                
                <Card className='attribute-card'>
                    <LiaPencilRulerSolid size={70}></LiaPencilRulerSolid>
                    <p className='attribute-text'>Front End Design</p>
                </Card>

                <Card className='attribute-card'>
                    <GiBrainstorm size={70} ></GiBrainstorm>
                    <p className='attribute-text'>Machine Learning</p>
                </Card>
            </div>
            <RevealComponent>
                <div className="three-container">
                    <div className="column">
                        <div className='col-head'>Qualities</div>
                        <div>
                            I am a
                            <span className='emphasized-text'> curious </span> individual who
                            is driven to be constantly learning,
                            <span className='emphasized-text'> motivated </span>
                            in my pursuits - within software development and beyond. My
                            <span className='emphasized-text'> passion </span>
                            is illustrated through my
                            <span className='emphasized-text'> dedicated </span>
                            work ethic as I fully engage myself in problem solving.
                            While I am
                            <span className='emphasized-text'> analytical</span>, 
                            I remain 
                            <span className='emphasized-text'> creative</span>, 
                            often arriving at outside-of-the-box solutions to intricate
                            problems.
                        </div>
                    </div>
                    <div className="column">
                        <div className='col-head'>Summary of Experiences</div>
                        <div>
                            I am a qualified professional with a strong background  
                            in <span className='emphasized-text'>full stack</span> and 
                            <span className='emphasized-text'> machine learning</span> software development.
                            I have created multiple 
                            <span className='emphasized-text'> production-grade </span> applications, wherein I experienced the
                            <span className='emphasized-text'> CI/CD </span>application lifecycle. From
                            feature extraction, to creating virtualizations, to networking, to front-end design, I've enjoyed it all.
                            
                        </div>
                    </div>
                    <div className="column">
                        <div className='col-head'>Interests</div>
                        I am an enthusiastic individual with a diverse set of interests, both casual and academic.
                        In my free time, one of my major passions is
                        <span className='emphasized-text'> music</span>, which I enjoy through playing piano, guitar,
                        and trumpet. I like to <span className='emphasized-text'> travel</span>, explore, learn
                        <span className='emphasized-text'> history </span>, and experience different cultures.
                        I am also a fan of many <span className='emphasized-text'> sports </span> such as soccer, 
                        Formula 1, skiing, and chess.
                    </div>
                </div>
            </RevealComponent>
            <div style={{backgroundColor: "#001a28", width: "100vw", padding: "40px 0px"}}>
                <div style={{margin:"20px 10px 20px 10px", fontSize: "2rem", textAlign: "center"}}>
                    Building <span className='accent-text' style={{fontSize: "2.2rem"}}> Your </span> Solutions with Modern Tools
                </div>
                <div style={{fontSize: "1.1rem", margin: "20px 0px 50px 0px", color: "#d0b1ff", fontWeight: 300, textAlign: "center"}}>
                    My Favourite Web Development Tools
                </div>
                <RevealComponent>
                    <div className='row-flex-center'>
                        <div>
                            <JavascriptOriginal size={70} className="my-tools-icons"></JavascriptOriginal>
                        </div>
                        <div>
                            <NodejsOriginal size={70} className="my-tools-icons"></NodejsOriginal>
                        </div>
                        <div>
                            <ExpressOriginal size={70} className="my-tools-icons" style={{backgroundColor: "white", borderRadius: "4px"}}></ExpressOriginal>
                        </div>
                        <div>
                            <ReactOriginal size={70} className="my-tools-icons"></ReactOriginal>
                        </div>
                        <div>
                            <PythonOriginal size={70} className="my-tools-icons"></PythonOriginal>
                        </div>
                        <div>
                            <NginxOriginal size={70} className="my-tools-icons"></NginxOriginal>
                        </div>
                        <div>
                            <MysqlOriginal size={70} className="my-tools-icons"></MysqlOriginal>
                        </div>
                        <div>
                            <GitOriginal size={70} className="my-tools-icons"></GitOriginal>
                        </div>
                        <div>
                            <FaGithub size={70} className="my-tools-icons" color='#6e5494'></FaGithub>
                        </div>
                    </div>
                </RevealComponent>
                <div style={{fontSize: "1.1rem", margin: "50px 0px 50px 0px", color: "#d0b1ff", fontWeight: 300, textAlign: "center"}}>
                    Other Technologies
                </div>
                <RevealComponent>
                    <div className='row-flex-center'>
                        <div>
                            <TensorflowLine size={70} className="my-tools-icons"></TensorflowLine>
                        </div>
                        <div>
                            <NumpyOriginal size={70} className="my-tools-icons"></NumpyOriginal>
                        </div>
                        <div>
                            <OpencvOriginal size={70} className="my-tools-icons"></OpencvOriginal>
                        </div>
                        <div>
                            <CplusplusPlain size={70} className="my-tools-icons"></CplusplusPlain>
                        </div>
                        <div>
                            <MatlabOriginal size={70} className="my-tools-icons"></MatlabOriginal>
                        </div>
                        <div>
                            <VscodeOriginal size={70} className="my-tools-icons"></VscodeOriginal>
                        </div>
                    </div>
                </RevealComponent>
            </div>
            <div>
                <div style={{fontSize: "2rem", margin: "60px 10px 20px 10px", textAlign: "center"}}>
                    See How I Learned these 
                    <span className='accent-text' style={{fontSize: "2.2rem"}}> Skills</span>
                    <div className='row-flex-center' style={{marginBottom: "50px", marginTop: "20px"}}>
                        <Link to={"./Projects"}>
                            <Button variant="outline-info" className="my-btn" style={{margin: "20px 10px"}}>Projects</Button>
                        </Link>
                        <Link to={"./Experience"}>
                            <Button variant="outline-info" className="my-btn" style={{margin: "20px 10px"}}>Experience</Button>
                        </Link>
                        <Link to={"./Education"}>
                            <Button variant="outline-info" className="my-btn" style={{margin: "20px 10px"}}>Education</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </Element>
        <Footer></Footer>
    </div>
  )
}

export default Home