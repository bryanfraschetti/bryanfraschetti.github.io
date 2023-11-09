import NavBar from '../components/NavBar'
import { Card } from 'react-bootstrap'
// import { BootstrapOriginal, CplusplusPlain, Css3Original, DeviconsReactOriginal, GitOriginal, GithubOriginal, Html5Original, JavascriptOriginal, MatlabOriginal, MysqlOriginal, NginxOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, ReactOriginal, TensorflowOriginal, UbuntuPlain, VimOriginal } from 'devicons-react'
import { Css3Original, JavascriptOriginal, MysqlOriginal, NginxOriginal, PythonOriginal, VimOriginal } from 'devicons-react'

// import rosLogo from "../assets/Ros_logo.svg"
// import kivyLogo from "../assets/kivy.svg"
// import XtensorLogo from "../assets/Xtensor_logo.svg"
// import Footer from '../components/Footer'

const Experience = () => {
  return (
    <div>
        <NavBar/>
        <div className='card-container post-nav'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Order Portal</Card.Title>
                <Card.Text>
                    Built a web-app from scratch with authentication and authorization
                    that allowed for clients to view company updates, parts, and installation documentation
                </Card.Text>
                <Card.Text>
                    Languages Used: Python, MariaDB/MySQL, Javascript, Jinja, CSS
                </Card.Text>
                <Card.Text>
                    Skills Learned: MySQL, RDBMS, WSGI, Pyramid, Nginx, Web Templating,
                    Daemonization, Certbot TLS
                </Card.Text>
                <div className='icon-list-container'>
                    <div className='devicon'>
                        <PythonOriginal size={"20"}></PythonOriginal>
                    </div>
                    <div className='devicon'>
                        <MysqlOriginal size={"20"}></MysqlOriginal>
                    </div>
                    <div className='devicon'>
                        <JavascriptOriginal size={"20"}></JavascriptOriginal>
                    </div>
                    <div className='devicon'>
                        <Css3Original size={"20"}></Css3Original>
                    </div>
                    <div className='devicon'>
                        <NginxOriginal size={"20"}></NginxOriginal>
                    </div>
                </div>
            </Card.Body>
            </Card>
        
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>GPS</Card.Title>
                <Card.Text>
                    Created a web-app that displayed daily transportation routes with AJAX
                    capabilities for automatic live updates.
                    communication with GPS IoT devices to
                    extract and cohesively organize incoming data into geoJSON files that could be displayed
                </Card.Text>
                <Card.Text>
                    Languages Used: Python, Javascript, Jinja, CSS
                </Card.Text>
                <Card.Text>
                    Skills Learned: AJAX, OpenLayers, ARQ, vm-bhyve, Nominatim, Python sockets Module
                </Card.Text>
                <div className='icon-list-container'>
                    <div className='devicon'>
                        <PythonOriginal size={"20"}></PythonOriginal>
                    </div>
                    <div className='devicon'>
                        <JavascriptOriginal size={"20"}></JavascriptOriginal>
                    </div>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Ubuntu Virtualization</Card.Title>
                <Card.Text>
                    Created a Virtualization of Ubuntu from FreeBSD CLI using hypervisor utility
                    vm-bhyve to run an instance of Nominatim reverse address lookup service
                    (to convert GPS coordinates to street names for managers)
                </Card.Text>
                <Card.Text>
                    Skills Learned: vm-bhyve, Nominatim, ZFS, LVM
                </Card.Text>
                <div className='icon-list-container'>
                    <div className='devicon'>
                        <PythonOriginal size={"20"}></PythonOriginal>
                    </div>
                    <div className='devicon'>
                        <JavascriptOriginal size={"20"}></JavascriptOriginal>
                    </div>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Vistracks API Integrations</Card.Title>
                <Card.Text>
                    Developed software that integrated various remote API endpoints to
                    perform realtime asset tracking for clients in the transportation industry
                </Card.Text>
                <Card.Text>
                    Languages Used: Python
                </Card.Text>
                <Card.Text>
                    Skills Learned: HTTP Request and Response Handling,
                    FreeBSD Operating System, Vi/Vim, cron
                </Card.Text>
                <div className='icon-list-container'>
                    <div className='devicon'>
                        <PythonOriginal size={"20"}></PythonOriginal>
                    </div>
                    <div className='devicon'>
                        <VimOriginal size={"20"}></VimOriginal>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </div>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Experience