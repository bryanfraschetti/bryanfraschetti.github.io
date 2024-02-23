import NavBar from '../components/NavBar'
import { Card, Carousel, CarouselCaption } from "react-bootstrap";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

import { Css3Original, JavascriptOriginal, MysqlOriginal, NginxOriginal, PythonOriginal, VimOriginal } from 'devicons-react'
import { GitOriginal, UbuntuPlain} from "devicons-react";
import { SiJinja } from "react-icons/si";
import { FaFreebsd } from "react-icons/fa";
import putty from  "../assets/icons/putty.svg"
import bhyve from "../assets/icons/bhyve.png"
import pyramid from "../assets/icons/pyramid.svg"

import vistracksLogo from "../assets/qdts/vistracksLogo.png"

import colors from "../assets/qdts/openlayers/colors.png"
import colorsgif from "../assets/qdts/openlayers/colors.gif"
import minimaps from "../assets/qdts/openlayers/minimaps.gif"

import dealers from "../assets/qdts/dealers.png"

import virtualization from "../assets/qdts/server-virtualization.jpg"

import iotcomm from "../assets/qdts/iot.jpeg"

import "./Experience.css"

const Experience = () => {
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
            <Modal id={"vistracks-modal"} onClose={()=> handleCloseModal("vistracks-modal")}>
                <div className="carousel-holder">
                    <img src={vistracksLogo} style={{marginBottom: "20px", backgroundColor: "lightblue", width: "60%"}} alt="VisTracks logo"></img>
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Summary: </b>
                            I developed software that <span className='accent-text'> integrated </span>
                            various remote API endpoints to
                            perform <span className='accent-text'> real time </span> asset tracking 
                            for clients in the transportation industry
                        </p>
                        <p><b className="keys">Status: </b><span className='accent-text'>Complete</span>. (Jan. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            I used Python and its <span className='accent-text'> http module </span>  to interact 
                            with the API via BasicAuth and collected 
                            information about active drivers, the truck they are driving, shipment ID and contents, 
                            then wrote the results to a MySQL database using the <span className='accent-text'> Python MySQL Connector 
                            module</span>. 
                            The database was connected to a web-app with which clients could interact. The code was uploaded 
                            to a headless remote FreeBSD server via PuTTY, where Vim was the de facto text editor.
                        </p>
                        <p><b className="keys">Skills Learned: </b>
                            BasicAuth, API access with Python, HTTP Request and Response Handling,
                            FreeBSD Operating System, Vi/Vim, cron
                        </p>
                    </div>
                </div>   
            </Modal>
            <Modal id={"GPS-webapp-modal"} onClose={()=> handleCloseModal("GPS-webapp-modal")}>
                <div className="carousel-holder">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={colors} alt="Main UI with colour changing menu open"></img>
                            <CarouselCaption style={{color: "black"}}><p style={{fontSize: "0.6rem"}}>*All data shown is simulated</p></CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={colorsgif} alt="GIF hiding, showing, selecting, and recolouring multiple routes"></img>
                            <CarouselCaption style={{color: "black"}}><p style={{fontSize: "0.6rem"}}>*All data shown is simulated</p></CarouselCaption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={minimaps} alt="GIF using minimaps and styling routes"></img>
                            <CarouselCaption style={{color: "black"}}><p style={{fontSize: "0.6rem"}}>*All data shown is simulated</p></CarouselCaption>
                        </Carousel.Item>
                    </Carousel>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                            I built a website that allowed for fleet managers to engage with their data
                            <span className='accent-text'> visually </span> and <span className='accent-text'> intuitively</span>.
                            Users can show/hide, select/unselect, and <span className='accent-text'> re-colour </span> truck routes as well as pick specific routes 
                            that they want to <span className='accent-text'> interact </span> with on separate maps.
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Beta</span>. (Oct. 2022 - Dec. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            I created a local development server using OpenLayers, a JS library that creates vector layer maps from 
                            OpenStreetMaps data, and Vite. I began using JS to consolidate and 
                            <span className="accent-text"> dynamically </span> 
                            style the simulated OpenLayers 
                            map data within the DOM and HTML elements. Once this was functional, the code was 
                            <span className="accent-text"> migrated </span>                             
                            to a production server.
                        </p>
                        <p>
                            On the production server, HTML was replaced with Jinja templating that read relevant information, such as driver, 
                            truck, and shipment data, from a MySQL database. The truck routes were extracted from IoT GPS devices 
                            (see my section entitled "IoT Device Communications") and were 
                            <span className="accent-text"> asynchronously </span> 
                            and 
                            <span className="accent-text"> automatically </span> 
                            refreshed every few minutes using JS 
                            to seemlessly keep managers informed and updated. The Jinja content was served using Pyramid WSGI, which 
                            I configured to enforce principles of 
                            <span className="accent-text"> authentication </span> 
                            and 
                            <span className="accent-text"> authorization </span> 
                            as well as handle routing. 
                            Direct interfacing with Pyramid happens internally; Nginx was configured as a 
                            <span className="accent-text"> reverse proxy </span> 
                            to handle user 
                            requests via HTTPS and pass them on to Pyramid. Since I had previously built a web-app, Nginx had to be configured 
                            to support 
                            <span className="accent-text"> virtual hosting</span>. 
                            The SSL certificates are generated and integrated 
                            using Certbot/Let's Encrypt with automatic renewal before their expiry via Cron. 
                            I then 
                            <span className="accent-text"> daemonized </span> 
                            the server using supervisord.
                        </p>
                        <p><b>Skills Learned: </b> AJAX, Virtual hosting, OpenLayers, Vite
                        </p>
                    </div>
                </div>  
            </Modal>
            <Modal id={"dealers-webapp-modal"} onClose={()=> handleCloseModal("dealers-webapp-modal")}>
                <div className="carousel-holder">
                    <img className="carousel-img" src={dealers} alt="Login Page" style={{width: "80%", marginBottom: "20px"}}></img>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                                I created a
                                <span className='accent-text'> portal </span> and website
                                for clients to receive company notices and updates, similar to a newsletter, 
                                as well as view parts available for order.
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Complete</span>. (Feb. 2022 - Apr. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            I built a web-app using Pyramid WSGI to 
                            <span className="accent-text"> interconnect </span> 
                            MySQL with front-end Jinja templates, 
                            handle routing, and enforce
                            <span className="accent-text"> security </span> 
                            measures such as authentication and authorization. I created 
                            and populated MySQL databases and tables. The Pyramid application was not exposed externally, but is 
                            instead reached by the public through Nginx, which handles requests to the website. The domain is set up with SSL 
                            certificates generated by Certbot/Let's Encrypt, automatically renewed via cron.
                        </p>
                        <p><b>Skills Learned: </b>  Server-side development, Proxying, Reverse-proxying, 
                        Load-balancing, Authentication, Authorization, RDBMS, WSGI, SSL, Templating, Front-end development
                        </p>
                    </div>
                </div>  
            </Modal>
            <Modal id={"vmbhyve-modal"} onClose={()=> handleCloseModal("vmbhyve-modal")}>     
                <div className="carousel-holder">
                    <img src={virtualization} style={{marginBottom: "20px", width: "60%"}} alt="Virtualization visualization"></img>
                    <div style={{width: "90%"}}>
                        <p><b className="keys">Summary: </b>
                            I created a virtualization of Ubuntu from the FreeBSD CLI using
                            <span className='accent-text'> hypervisor utility</span>, 
                            vm-bhyve in order to run an instance of Nominatim reverse address lookup service that
                            converts GPS coordinates to street names for managers
                        </p>
                        <p><b className="keys">Status: </b><span className="accent-text">Complete</span>. (Nov. 2022)</p>
                        <p>
                            <b className="keys">Technical Details: </b> 
                            Nominatim offers the reverse address lookup service online, however, it enforces rate limits 
                            on requests by IP. 
                            To avoid limitations, and operate with an optimized build, I installed a 
                            local copy from prebuilt Ubuntu
                            <span className='accent-text'> binaries</span>, 
                            which 
                            <span className='accent-text'> necessitated </span>
                            a virtual machine as the server's host OS was FreeBSD. I then created an internal server 
                            on the VM to host the Nominatim installation so that it could be 
                            <span className='accent-text'> queried </span>
                            from the host OS.
                        </p>
                        <p><b>Skills Learned: </b> 
                            vm-bhyve, network configuration, ZFS, LVM, Nominatim, OpenStreetMaps
                        </p>
                    </div>
                </div>   
            </Modal>
            <Modal id={"iot-comm-modal"} onClose={()=> handleCloseModal("iot-comm-modal")}>
                <div className="carousel-holder">
                    <img className="carousel-img" src={iotcomm} alt="Internet of things that presents 
                    the idea of technological advancements" style={{width: "60%", marginBottom: "20px"}}></img>
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Summary: </b>
                            I developed Python scripts that
                            <span className='accent-text'> wirelessly </span>
                            communicated with remote GPS devices and
                            <span className='accent-text'> extracted </span> GPS coordinates, 
                            timestamps, Vehicle Identification Numbers, Engine codes, driver data, etc. from 
                            packets.
                        </p>
                        <p>
                            <b className="keys">Status: </b><span className="accent-text">Complete</span>. (Oct. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            I used Python's socket module to 
                            <span className='accent-text'> establish </span>
                            a listening node for incoming communication from 
                            remote devices (in particular the Pacific Track PT40), processed the incoming data, 
                            <span className='accent-text'> forwarded </span> 
                            requests to the Nominatim server I created (see Ubuntu Virtualization section), wrote information 
                            to databases, log files, and custom-structured geoJSON files for other applications to easily access 
                            <span className='accent-text'> business-critical </span> 
                            information in addition to GPS data based on driver and vehicle.
                        </p>
                        <p><b>Skills Learned: </b>  Sockets, UDP, ACKing
                        </p>
                    </div>
                </div>  
            </Modal>
            <NavBar />
            <div id='blur-on-modal'>
                <h1 className='post-nav my-header'><span className="accent-text">Employment Related </span>Projects</h1>
                <p style={{textAlign: "center", margin: "25px 0px 10px 0px", fontWeight: 300, fontSize: "1rem"}} className='emphasized-text'>Click on any project to learn more</p>
                <div className='card-container' style={{width: "100vw"}}>

                    <Card id="dealers-webapp" alt="Background showing login page of the webapp" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("dealers-webapp-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Information and Order Portal</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <NginxOriginal size={"40"} alt="Nginx Logo"></NginxOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={pyramid} height={"20px"} alt="Pyramid WSGI logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <MysqlOriginal size={"20"} alt="MySQL logo"></MysqlOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <JavascriptOriginal size={"20"} alt="JS logo"></JavascriptOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiJinja size={"20"} alt="Jinja logo"></SiJinja>
                                    </div>
                                    <div className='devicon'>
                                        <Css3Original size={"20"} alt="CSS logo"></Css3Original>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="GPS-webapp" alt="Interactions with the GPS website I designed" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("GPS-webapp-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Asset Tracking GPS Web App</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <NginxOriginal size={"40"} alt="Nginx Logo"></NginxOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={pyramid} height={"20px"} alt="Pyramid WSGI Logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <MysqlOriginal size={"20"} alt="MySQL logo"></MysqlOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <JavascriptOriginal size={"20"} alt="JS logo"></JavascriptOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiJinja size={"20"} alt="Jinja logo"></SiJinja>
                                    </div>
                                    <div className='devicon'>
                                        <GitOriginal size={"20"} alt="Git logo"></GitOriginal>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor: "lightblue"}} id="vistracks" alt="Vistracks logo" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("vistracks-modal")} onTouchStart={handleTouchStart}>
                            <div className="short-info">
                                <Card.Title>VisTracks API Integrations</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={putty} height={"20px"} alt="PuTTY logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <FaFreebsd size={"20"} color="rgb(128,0,0)" alt="FreeBSD logo"></FaFreebsd>
                                    </div>
                                    <div className='devicon'>
                                        <VimOriginal size={"20"} alt="vim logo"></VimOriginal>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="vmbhyve" alt="depicting visualization of virtualization" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("vmbhyve-modal")} onTouchStart={handleTouchStart}> <div className='short-info'>
                                <Card.Title>Ubuntu Virtualization</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon' style={{backgroundColor: "white", borderRadius: "4px"}}>
                                        <img src={bhyve} height={"30px"} alt="BHYVE logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <img src={putty} height={"20px"} alt="PuTTY logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <FaFreebsd size={"20"} color="rgb(128,0,0)" alt="FreeBSD logo"></FaFreebsd>
                                    </div>
                                    <div className='devicon'>
                                        <UbuntuPlain size={"20"} alt="Ubuntu logo"></UbuntuPlain>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="iot-comm" alt="IoT that presents the idea of technological advancements" className='my-card' onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
                        <Card.Body onClick={()=> handleOpenModal("iot-comm-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>IoT Device Communications</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
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

export default Experience