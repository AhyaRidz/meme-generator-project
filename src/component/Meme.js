// * Import React
import React from "react";

export default function Meme(){
    return (
        <form className="memeGenerator">
            <div className="inputs">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button><strong>Get a new meme image 🖼️</strong></button>
        </form>
    )
}