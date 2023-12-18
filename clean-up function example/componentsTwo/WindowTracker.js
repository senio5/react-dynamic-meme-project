import React from "react";


export default function WindowTracker(){
    const[windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    //using useEffect and adding a clean up function for useEffect sideEffects
    //a clean up effect is only needed when you're using React.useEffect to switch between
    //when we "switch" effects. In other words when we put a function inside of React.useEffect
    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
    }
        window.addEventListener("resize", watchWidth)
   
        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        <h1>Window width: {window.innerWidth} </h1>
    )
}