import React from "react";
import WindowTracker from "./components/WindowTracker";

export default function AppTwo(){
    const[show, setShow] = React.useState(true)
    
    function toggle(){
        setShow(prevShow => !prevShow)
    }
    return(
        <div>
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}