import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import RevealComponent from "../components/revealComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  // FaGithub,
  FaServer,
} from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi";
import { Element } from "react-scroll";
import { LiaPencilRulerSolid } from "react-icons/lia";
import "./Home.css";
import {
  CplusplusPlain,
  ExpressOriginal,
  //   GitOriginal,
  JavascriptOriginal,
  MatlabOriginal,
  MysqlOriginal,
  NginxOriginal,
  NodejsOriginal,
  NumpyOriginal,
  OpencvOriginal,
  PythonOriginal,
  ReactOriginal,
  TensorflowLine,
  //   VscodeOriginal,
  DockerOriginal,
  PandasOriginal,
  DotNetOriginal,
  CsharpOriginal,
  //   BashOriginal,
} from "devicons-react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to(".attribute-card", {
      duration: 2,
      "--rotate": 360,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <Element
        id="about-me"
        name="about-me"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "80px 0px 40px 0px" }} className="my-header">
          Experience I
          <span className="accent-text" style={{ fontSize: "2.2rem" }}>
            {" "}
            Offer
          </span>
        </h1>
        <div className="card-container" style={{ margin: "0px" }}>
          <Card className="attribute-card">
            <FaServer size={70}></FaServer>
            <p className="attribute-text">Server Side Development</p>
          </Card>

          <Card className="attribute-card">
            <LiaPencilRulerSolid size={70}></LiaPencilRulerSolid>
            <p className="attribute-text">Front End Design</p>
          </Card>

          <Card className="attribute-card">
            <GiBrainstorm size={70}></GiBrainstorm>
            <p className="attribute-text">Machine Learning</p>
          </Card>
        </div>
        <RevealComponent>
          <div className="three-container">
            <div className="column">
              <div className="col-head">Qualities</div>
              <p>
                I am a<span className="emphasized-text"> curious </span>{" "}
                individual who is driven to be constantly learning,
                <span className="emphasized-text"> motivated </span>
                in my pursuits - within software development and beyond. My
                <span className="emphasized-text"> passion </span>
                is illustrated through my
                <span className="emphasized-text"> dedicated </span>
                work ethic as I fully engage in solving problems. While I am
                <span className="emphasized-text"> analytical</span>, I remain
                <span className="emphasized-text"> creative</span>, often
                arriving at outside-of-the-box solutions to intricate problems.
              </p>
            </div>
            <div className="column">
              <div className="col-head">Summary of Experiences</div>
              <p>
                I am a qualified professional with a strong background in{" "}
                <span className="emphasized-text">full stack</span> and
                <span className="emphasized-text"> machine learning</span>{" "}
                software development. I have created multiple
                <span className="emphasized-text"> production-grade </span>{" "}
                programs, wherein I experienced the application
                <span className="emphasized-text"> lifecycle </span> at all
                stacks. From feature extraction, to creating virtualizations, to
                networking, to front-end design, I've enjoyed it all.
              </p>
            </div>
            <div className="column">
              <div className="col-head">Interests</div>
              <p>
                I am an enthusiastic individual with a diverse set of interests,
                both casual and academic. In my free time, one of my major
                passions is
                <span className="emphasized-text"> music</span>, which I enjoy
                through playing piano, guitar, and trumpet. I like to{" "}
                <span className="emphasized-text"> travel</span>, explore, learn
                <span className="emphasized-text"> history </span>, and
                experience different cultures. I am also a fan of many{" "}
                <span className="emphasized-text"> sports </span> such as
                soccer, Formula 1, skiing, and chess.
              </p>
            </div>
          </div>
        </RevealComponent>
        <div
          style={{
            backgroundColor: "#001a28",
            width: "100vw",
            padding: "40px 0px",
          }}
        >
          <div
            style={{
              margin: "20px 10px 20px 10px",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Building{" "}
            <span className="accent-text" style={{ fontSize: "2.2rem" }}>
              {" "}
              Your{" "}
            </span>{" "}
            Solutions with Modern Tools
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              margin: "20px 0px 30px 0px",
              color: "#d0b1ff",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            My Favourite Web Development Tools
          </div>
          <RevealComponent>
            {/*
            weird devicons bug where python, matlab, and dotnet use url(#a) and url(#b)
            for svg styling. whichever is first in dom takes priority

            forced to overwrite python colors since their logo
            colours are publicly

            therefore i have to load dotnet first, but if i do display none it never renders
            and updates the urls so i have to render it as size 0
            */}
            <div>
              <DotNetOriginal
                size={0}
                className="my-tools-icons"
                alt="ASP.NET"
              ></DotNetOriginal>
            </div>
            <div className="row-flex-center">
              <div>
                <JavascriptOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="Javascript"
                ></JavascriptOriginal>
              </div>
              <div>
                <NodejsOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="NodeJS"
                ></NodejsOriginal>
              </div>
              <div>
                <ExpressOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="ExpressJS"
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
                ></ExpressOriginal>
              </div>
              <div>
                <ReactOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="ReactJS"
                ></ReactOriginal>
              </div>
              <div>
                <DockerOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="Docker"
                ></DockerOriginal>
              </div>
              <div>
                <NginxOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="NginX"
                ></NginxOriginal>
              </div>
              <div>
                <MysqlOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="MySQL"
                  style={{ color: "white" }}
                ></MysqlOriginal>
              </div>
              <div>
                <DotNetOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="ASP.NET"
                ></DotNetOriginal>
              </div>
              <div>
                <CsharpOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="C Sharp"
                ></CsharpOriginal>
              </div>
            </div>
          </RevealComponent>
          <div
            style={{
              fontSize: "1.1rem",
              margin: "50px 0px 50px 0px",
              color: "#d0b1ff",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            My Favourite Machine Learning Technologies
          </div>
          <RevealComponent>
            <div className="row-flex-center">
              <div>
                <PythonOriginal
                  size={70}
                  className="my-tools-icons python"
                  alt="Python"
                ></PythonOriginal>
              </div>
              <div>
                <TensorflowLine
                  size={70}
                  className="my-tools-icons"
                  alt="TensorFlow"
                ></TensorflowLine>
              </div>
              <div>
                <NumpyOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="NumPy"
                ></NumpyOriginal>
              </div>
              <div>
                <PandasOriginal
                  size={70}
                  style={{ backgroundColor: "white", borderRadius: "8px" }}
                  className="my-tools-icons"
                  alt="Pandas"
                ></PandasOriginal>
              </div>
              <div>
                <OpencvOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="OpenCV"
                ></OpencvOriginal>
              </div>
              <div>
                <CplusplusPlain
                  size={70}
                  className="my-tools-icons"
                  alt="C++"
                ></CplusplusPlain>
              </div>
              <div>
                <MatlabOriginal
                  size={70}
                  className="my-tools-icons matlab"
                  alt="MatLab"
                ></MatlabOriginal>
              </div>
            </div>
          </RevealComponent>
          {/* <div
            style={{
              fontSize: "1.1rem",
              margin: "50px 0px 30px 0px",
              color: "#d0b1ff",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            Other Tools
          </div>
          <RevealComponent>
            <div className="row-flex-center">
              <div>
                <BashOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="VSCode"
                  style={{ backgroundColor: "white", borderRadius: "8px" }}
                ></BashOriginal>
              </div>
              <div>
                <VscodeOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="VSCode"
                ></VscodeOriginal>
              </div>
              <div>
                <GitOriginal
                  size={70}
                  className="my-tools-icons"
                  alt="Git"
                ></GitOriginal>
              </div>
              <div>
                <FaGithub
                  size={70}
                  className="my-tools-icons"
                  alt="Github"
                  color="#6e5494"
                ></FaGithub>
              </div>
            </div>
          </RevealComponent> */}
        </div>

        <div>
          <div
            style={{
              fontSize: "2rem",
              margin: "60px 10px 20px 10px",
              textAlign: "center",
            }}
          >
            See How I Learned these
            <span className="accent-text" style={{ fontSize: "2.2rem" }}>
              {" "}
              Skills
            </span>
            <div
              className="row-flex-center"
              style={{ marginBottom: "50px", marginTop: "20px" }}
            >
              <Link to={"./Projects"}>
                <Button
                  variant="outline-info"
                  className="my-btn"
                  style={{ margin: "20px 10px" }}
                >
                  Projects
                </Button>
              </Link>
              <Link to={"./Experience"}>
                <Button
                  variant="outline-info"
                  className="my-btn"
                  style={{ margin: "20px 10px" }}
                >
                  Experience
                </Button>
              </Link>
              <Link to={"./Education"}>
                <Button
                  variant="outline-info"
                  className="my-btn"
                  style={{ margin: "20px 10px" }}
                >
                  Education
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Element>
      <Footer></Footer>
    </div>
  );
};

export default Home;
