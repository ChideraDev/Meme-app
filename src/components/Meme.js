import React from "react";

export default function Meme(props) {
  /*const [memeImage, setMemeImage] = React.useState()*/
  const [meme, setMeme] = React.useState({
    randomImage: "/squinting-2.jpg",
    bottomText: "",
    topText: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);
  React.useEffect(() => {
      async function getMemes(){
          const res = await fetch("https://api.imgflip.com/get_memes")
          const data = await res.json()
          setAllMemes(data.data.memes)
      }
     getMemes();
  }, []);

  function getMemeImage() {
    console.log(allMemes);
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main className="meme">
      <div className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-input--1"
            placeholder="top text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />

          <input
            type="text"
            className="form-input--1"
            placeholder="bottom text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>

        <button type="submit" className="form-btn" onClick={getMemeImage}>
          Get a new meme image🖼️
        </button>
      </div>

      <div className="meme--pic">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
