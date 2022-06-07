import React from "react";
import './header.css'
import Mods from "./mods";

export default props=>{
    
    return(
        <header className="Header">
            <div id="Header-title">
                <p>Where in the world?</p>
            </div>
            <div>
                <Mods />
            </div>
        </header>
    )
}