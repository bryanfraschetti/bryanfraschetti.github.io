import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Attribute from '../components/Attribute'
import "../components/AttributeContainer.css"
import "./Home.css"

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        {/* <h3 className='subheading'>About Me</h3>
        <p className="body-text">Motivated. </p> */}
        <div className='section'>
            {/* <h3 className='section-title'>Software Languages</h3> */}
            {/* <div className='attribute-container'>
                <Attribute child="Python" />
                <Attribute child="C++" />
                <Attribute child="Javascript"/>
                <Attribute child="SQL"/>
                <Attribute child="HTML" />
                <Attribute child="CSS" />
                <Attribute child="MATLAB" />
            </div> */}
            {/* <h3 className='section-title'>Libraries</h3> */}
            {/* <div className='attribute-container'>
                <Attribute child="TensorFlow" />
                <Attribute child="Keras" />
                <Attribute child="NumPy" />
                <Attribute child="Kivy" />
                <Attribute child="sockets" />
                <Attribute child="xTensor" />
            </div> */}
            {/* <h3 className='section-title'>Frameworks</h3> */}
            {/* <div className='attribute-container'>
                <Attribute child="React" />
                <Attribute child="Pyramid WSGI" />
            </div> */}
            {/* <h3 className='section-title'>Server Side</h3> */}
            {/* <div className='attribute-container'>
                <Attribute child="Nginx" />
                <Attribute child="Supervisord" />
                <Attribute child="MariaDB" />
                <Attribute child="Ubuntu" />
                <Attribute child="FreeBSD" />
            </div> */}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home