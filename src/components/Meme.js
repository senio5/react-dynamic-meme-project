import React from "react";
import memesData from "../memesData"

export default function Meme(){
    //const[memeImage, setMemeImage] = React.useState("")
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //using state to get the data
    const[allMemeImages, setAllMemeImages] = React.useState(memesData)


    //this function is for the event when the button is clicked
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        //will get a random meme from the ArrayList of objects
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        //will get the image with the random memes
        const url = memesArray[randomNumber].url
        setMeme(function(prevMeme){
            return ({
                ...prevMeme,
                randomImage: url
            })
        })
    }
    return(
        <main>
            <div className="form-grid">
                <input className="input" type="text" placeholder="Top text" />
                <input className="input" type="text" placeholder="Bottom text" />
                <button className="button" onClick={getMemeImage} >Get a new meme image &#128444;</button>
            </div>
            <img className="" src={meme.randomImage} />
        </main>
    )
}
//in the <button> tag  onClick={getMemeImage} is an action that will cause and event
//when the image is clicked it will call the getMemeImage function and carry it out