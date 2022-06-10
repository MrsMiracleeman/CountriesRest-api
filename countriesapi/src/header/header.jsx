import React from "react";
import './header.css'
import Mods from "./mods";

export default props=>{
    
    return(
        <header className="Header">
            <div id="Header-title">
                <p><a href="/">Where in the world?</a></p>
            </div>
            <div>
                <Mods />
            </div>
        </header>
    )
}