import React, { useState } from "react";
import { Link } from "react-router-dom";
import './filtros.css'

export default props=>{

    const [active,setActive] = useState(false)

    function toggler(){
        if(active === false){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    return(
        <div className="dropdown">
            <button id="fil" type="button" onClick={toggler}>
               Filter by region 
               <i className="fa fa-arrow-down"></i> 
            </button>
            <div className={`drop ${active ? 'on' : ''}`}>
                <button className="dropdown-item" type="button"><a href="/africa">África</a></button>
                <button className="dropdown-item" type="button"><a href="/america">Américas</a></button>
                <button className="dropdown-item" type="button"><a href="/europa">Europa</a></button>
                <button className="dropdown-item" type="button"><a href="/asia">Ásia</a></button>
                <button className="dropdown-item" type="button"><a href="/oceania">Oceania</a></button>
            </div>
     </div>
    )
}