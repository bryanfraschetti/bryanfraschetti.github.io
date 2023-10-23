import "./Hero.css"

import { TypeDelete } from "../hooks/typedelete"
import { TypingEffect } from "../hooks/typing";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyButton.css"


const Hero = () =>{
    const messages = [
        { text: "Software Developer.", typingDelay: 150, deletingDelay: 75, initiationDelay: 0},
        { text: "Researcher.", typingDelay: 250, deletingDelay: 75, initiationDelay: 5000},
    ];

    const finalMessage = TypingEffect("Engineer.", 200, 9500)

    return (
        <div className="hero">
            <section className="hero-content">
                <div className="inner-text" style={{ minHeight: 170}}>
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
                <Link to={"./projects"} style={{ width: "fit-content", position: "relative", left: "90%", transform: "translateX(-100%)" }}>
                    <Button variant="outline-info" className="my-btn see-more">View My Work</Button>
                </Link>
            </section>
        </div>
    )
}


export default Hero