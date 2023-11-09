import "./Hero.css"

import { TypeDelete } from "../hooks/typedelete"
import { TypingEffect } from "../hooks/typing";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';
import "./MyButton.css"


const Hero = () =>{
    const messages = [
        { text: "Software Developer.", typingDelay: 150, deletingDelay: 75, initiationDelay: 0},
        { text: "Researcher.", typingDelay: 175, deletingDelay: 75, initiationDelay: 5000},
    ];

    const finalMessage = TypingEffect("Engineer.", 200, 8200)

    const scrollToAboutMe = () => {
        scroller.scrollTo('about-me', {
          duration: 400,
          delay: 0,
          smooth: 'easeOutQuad',
          offset: -75
        });
      };

    return (
        <div className="hero">
            <section className="hero-content">
                <div className="inner-text">
                    {messages.map((message, index) => (
                        <TypeDelete
                        key={index}
                        phrase={message.text}
                        typingDelay={message.typingDelay}
                        deletingDelay={message.deletingDelay}
                        initiationDelay={message.initiationDelay}
                        />
                    ))}
                    <p>{finalMessage}</p>
                </div>
                <div className="see-more-btn-container">
                    <Link to={"./projects"} style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }}>
                        <Button variant="outline-info" className="my-btn see-more">View My Work</Button>
                    </Link>
                    <Link to={"#about-me"} style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }}>
                        <Button variant="outline-info" className="my-btn see-more" onClick={scrollToAboutMe}>About Me</Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}


export default Hero