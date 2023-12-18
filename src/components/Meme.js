import React from "react";
//import memesData from "../memesData"

export default function Meme(){
    //this is state for an object in our data so we can use to display to the screen
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //using state to get the data and set it within some state
    const[allMeme, setAllMeme] = React.useState([])
    
    //if React.useEffect returns a function it will need a "clean up function"
    React.useEffect(() =>{
        //with fetch we pick the API we want to get data from
        fetch("https://api.imgflip.com/get_memes")
        //resolve the fetch with .then and set the res = response to respond in javascript
        .then(res=> res.json())
        //after resolving the response we tell useEffect what type of data we want to return
        .then(data => setAllMemes(data.data.memes))
    }, [])

    //this function is for the event when the button is clicked
    function getMemeImage(){
        //will get a random meme from the ArrayList of objects
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        //will get the random memes and replace the previous one with the new one
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    //this handle is for the event change when there has been any change to the text box
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }

    return(
        <main>
            <div className="form-grid">
                <input
                className="input"
                type="text"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange} />
                
                <input
                className="input"
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange} />

                <button
                className="button"
                onClick={getMemeImage}>
                Get a new meme image &#128444;
                </button>
            </div>
            <img className="meme-image" src={meme.randomImage} />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </main>
    )
}
//in the <button> tag  onClick={getMemeImage} is an action that will cause and event
//when the image is clicked it will call the getMemeImage function and carry it out