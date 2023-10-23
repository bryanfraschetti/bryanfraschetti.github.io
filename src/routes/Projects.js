import NavBar from '../components/NavBar'
import { Card } from 'react-bootstrap'
import { BootstrapOriginal, CplusplusPlain, Css3Original, GitOriginal, GithubOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, NumpyOriginal, PythonOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain } from 'devicons-react'

const Projects = () => {
  return (
    <div>
        <NavBar/>
        <div className='card-container post-nav'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Gesture Recognition with mmWaveRadar</Card.Title>
                <Card.Text>
                    Developed a feature-based gesture recognition algorithm with an accuracy rate of approximately 85%
                </Card.Text>
                <Card.Text>
                    Languages Used: Python, C++, MATLAB
                </Card.Text>
                <Card.Text>
                    Skills Learned: TensorFlow, NumPy, Kivy, ROS, xTensor, Ubuntu
                </Card.Text>
                <div className='icon-list-container'>
                    <PythonOriginal></PythonOriginal>
                    <CplusplusPlain></CplusplusPlain>
                    <MatlabOriginal></MatlabOriginal>
                    <TensorflowOriginal></TensorflowOriginal>
                    <NumpyOriginal></NumpyOriginal>
                    {/* KIVY + ROS NEEDED */}
                    <UbuntuPlain></UbuntuPlain>
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
                    OAuth, RESTful API, Secure Token Storage, JSON, Bootstrap
                </Card.Text>
                <div className='icon-list-container'>
                    <JavascriptOriginal></JavascriptOriginal>
                    <Html5Original></Html5Original>
                    <Css3Original></Css3Original>
                    <BootstrapOriginal></BootstrapOriginal>
                    <GitOriginal></GitOriginal>
                    <GithubOriginal></GithubOriginal>
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
                    Skills Learned: ReactJS, React-Bootstrap
                </Card.Text>
                <div className='icon-list-container'>
                    <ReactOriginal></ReactOriginal>
                </div>
            </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default Projects