import NavBar from '../components/NavBar'
import { Card } from 'react-bootstrap'
import { BootstrapOriginal, CplusplusPlain, Css3Original, DeviconsReactOriginal, GitOriginal, GithubOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain } from 'devicons-react'
import rosLogo from "../assets/Ros_logo.svg"
import kivyLogo from "../assets/kivy.svg"
import XtensorLogo from "../assets/Xtensor_logo.svg"
import Footer from '../components/Footer'
// import Example from "../components/example";


const Projects = () => {
  return (
    <div>
        <NavBar/>
        <div className='card-container post-nav'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Sensor Fusion Approach to Gesture Recognition</Card.Title>
                <Card.Text>
                    Developed a closed-loop feature-based gesture recognition
                    algorithm with an accuracy of approximately 85% using
                    camera and mmWave radar
                </Card.Text>
                <Card.Text>
                    Languages Used: Python, C++, MATLAB
                </Card.Text>
                <Card.Text>
                    Skills Learned: TensorFlow, NumPy, OpenCV, Kivy, xTensor, ROS, Ubuntu
                </Card.Text>
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
                <Card.Text>
                    Built a web-app that uses the Spotify API to reorganize and publish
                    user playlists based on music theory and feature similarity
                </Card.Text>
                <Card.Text>
                    Languages Used: Javascript, HTML, CSS
                </Card.Text>
                <Card.Text>
                    Skills Learned: Fetch API, Async/Await, Promises, XHR,
                    OAuth, RESTful API, Secure Token Management, JSON, Bootstrap
                </Card.Text>
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
                <Card.Text>
                    Built a website to showcase the skills which I have learned through
                    self-directed projects, employment, and school
                </Card.Text>
                <Card.Text>
                    Languages Used: Javascript (JSX), HTML, CSS
                </Card.Text>
                <Card.Text>
                    Skills Learned: ReactJS, React-Bootstrap, Devicons React, CI/CD Pipeline
                </Card.Text>
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
        </div>
        <div className='card-container post-nav'>
            <div style={{ fontSize: "1.5rem"}}>My <span className='accent-text'>Projects</span></div>
            {/* <Example/> */}

        </div>
        <Footer></Footer>
    </div>
  )
}

export default Projects