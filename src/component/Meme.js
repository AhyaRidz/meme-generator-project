// * Import React
import React from "react";
// * memesData
import memesData from "../data/memesData";

export default function Meme() {
    const [memeUrl, setMemeUrl] = React.useState();
    const [memeName, setMemeName] = React.useState();

    const getMemeArray = memesData.data.memes;
    const randomiser = Math.floor(Math.random() * getMemeArray.length);

    let name;

    const getMeme = () => {
        const url = getMemeArray[randomiser].url;
        name = getMemeArray[randomiser].name;

        setMemeUrl((prevUrl) => (prevUrl = url));
        setMemeName((prevName) => (prevName = name));
    };

    return (
        <main>
            <section className="memeGenerator">
                <div className="inputs">
                    <input type="text" placeholder="Top Text" />
                    <input type="text" placeholder="Bottom Text" />
                </div>
                <button type="button" onClick={getMeme}>
                    <strong>Get a new meme image 🖼️</strong>
                </button>
            </section>

            <section className="memeSect">
                    <img
                        src={memeUrl}
                        alt={memeName}
                        title={memeName}
                        className="meme"
                    />
            </section>
        </main>
    );
}
