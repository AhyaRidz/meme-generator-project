// * Import React
import React from "react";
// * memesData
import memesData from "../data/memesData";

export default function Meme() {
    

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
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
                    <input type="text" placeholder="Top Text" />
                    <input type="text" placeholder="Bottom Text" />
                </div>
                <button type="button" onClick={getMeme}>
                    <strong>Get a new meme image 🖼️</strong>
                </button>
            </section>

            <section className="memeSect">
                <img
                    src={meme.randomImg}
                    alt="Random Memes"
                    title="Random Memes"
                    className="meme"
                />
            </section>
        </main>
    );
}
