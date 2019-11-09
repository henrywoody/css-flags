import React from "react";
import "./style.css";


const Home: React.FC = () => {
    return (
        <div className="home viewport">
            <h1>CSS Flags</h1>

            <div className="description">
                <p>
                    These are some flags recreated using CSS.
                </p>
                
                <p>
                    Flags are chosen by considering a mix of how well designed the flag is and how possible it is to recreate in CSS.
                </p>
            </div>
        </div>
    )
}

export default Home;
