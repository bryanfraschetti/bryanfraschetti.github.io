import "./Hero.css"

import { TypeDelete } from "../hooks/typedelete"
import { TypingEffect } from "../hooks/typing";


const Hero = () =>{
    // const text = TypeDelete("Software Developer.", 150, 75)
    const messages = [
        { text: "Software Developer.", typingDelay: 150, deletingDelay: 75, initiationDelay: 0},
        { text: "Researcher.", typingDelay: 250, deletingDelay: 75, initiationDelay: 5000},
    ];

    const finalMessage = TypingEffect("Engineer.", 200, 9500)

    return (
        <section className="hero">
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
            <p className="inner-text">{finalMessage}</p>

            </div>
        </section>
    )
}


export default Hero