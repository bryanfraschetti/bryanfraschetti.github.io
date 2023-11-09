import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Card } from 'react-bootstrap'
import { FaServer } from 'react-icons/fa'
import { GiBrainstorm } from 'react-icons/gi'
import { Element } from 'react-scroll'
import { LiaPencilRulerSolid } from 'react-icons/lia'
import "./Home.css"

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Element id="about-me" name="about-me" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{margin:"60px 0px 20px 0px", fontSize: "1.5rem"}}>Experience I can
                <span className='accent-text'> Offer</span>
            </div>
            <div className='card-container' style={{margin:"0px"}}>
                <Card className='attribute-card'>
                    <FaServer size={64}></FaServer>
                    <p className='attribute-text'>Server Side Development</p>
                </Card>
                
                <Card className='attribute-card'>
                    <LiaPencilRulerSolid size={64}></LiaPencilRulerSolid>
                    <p className='attribute-text'>Front End Design</p>
                </Card>

                <Card className='attribute-card'>
                    <GiBrainstorm size={64} ></GiBrainstorm>
                    <p className='attribute-text'>Machine Learning</p>
                </Card>
            </div>
        </Element>
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
                {/*
                <ul className='list-grid'>
                    <li className='my-bullet-list'>Nginx</li>
                    <li className='my-bullet-list'>Pyramid WSGI</li>
                    <li className='my-bullet-list'>NodeJS</li>
                    <li className='my-bullet-list'>ExpressJS</li>
                    <li className='my-bullet-list'>ReactJS</li>
                    <li className='my-bullet-list'>MariaDB / MySQL</li>
                </ul>
                <div className='pre-list'>
                    Beyond the web, I have <span className='emphasized-text'> created </span>
                    and <span className='emphasized-text'> trained </span>
                    gesture recognition algorithms using:
                </div>
                <ul className='list-grid'>
                    <li className='my-bullet-list'>TensorFlow</li>
                    <li className='my-bullet-list'>Sklearn</li>
                    <li className='my-bullet-list'>NumPy</li>
                    <li className='my-bullet-list'>Pandas</li>
                    <li className='my-bullet-list'>OpenCV</li>
                    <li className='my-bullet-list'>xTensor</li>
                </ul>
                <div>


                <ul className='list-grid'>
                    <li className='my-bullet-list'>Javascript</li>
                    <li className='my-bullet-list'>Python</li>
                    <li className='my-bullet-list'>C++</li>
                    <li className='my-bullet-list'>SQL</li>
                    <li className='my-bullet-list'>HTML</li>
                    <li className='my-bullet-list'>CSS + Bootstrap</li>
                </ul>
                    VS Code
                    I used PuTTY, FreeBSD shells, and Git GitHub
                </div>
  */}
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
        <Footer></Footer>
    </div>
  )
}

export default Home