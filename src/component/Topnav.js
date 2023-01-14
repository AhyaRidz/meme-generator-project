// * Import React
import React from "react";
// * Troll Face
import trollFace from "../images/troll-face.png";

export default function Topnav() {
    return (
        <nav>
            <div className="logo">
                <img src={trollFace} alt="troll-face icon" />
                <h3>Meme Generator</h3>
            </div>
            <p className="courseTag">React Course - Project 3</p>
        </nav>
    );
}
