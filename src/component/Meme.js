// * Import React
import React from "react";
// * memesData
import memesData from "../data/memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "",
    });
    const [allMemeImages] = React.useState(memesData);

    const getText = (e) => {
        const { name, value } = e.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    };

    const getMeme = () => {
        const getMemeArray = allMemeImages.data.memes;
        const randomiser = Math.floor(Math.random() * getMemeArray.length);
        const url = getMemeArray[randomiser].url;
        console.log(url);

        setMeme((prevMeme) => {
            return { ...prevMeme, randomImg: url };
        });
    };

    return (
        <main>
            <section className="memeGenerator">
                <div className="inputs">
                    <input
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={getText}
                    />
                    <input
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={getText}
                    />
                </div>
                <button type="button" onClick={getMeme}>
                    <strong>Get a new meme image 🖼️</strong>
                </button>
            </section>

            {meme.randomImg && (
                <section className="memeSect">
                    <img
                        src={meme.randomImg}
                        alt="Random Memes"
                        title="Random Memes"
                        className="meme"
                    />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </section>
            )}
        </main>
    );
}
