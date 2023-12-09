import React from "react";
import Wallstreet from "../images/wall-street-bets.jpg"


export default function Header(){
    return(
        <header className="header">
            <img className="header-image" src={Wallstreet} alt="" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}