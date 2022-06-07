import React, { useState } from "react";
import './filtros.css'

export default props=>{

    const [active,setActive] = useState(false)

    function toggler(){
        if(active === false){
            console.log('oi')
            setActive(true)
        }else{
            setActive(false)
        }
    }

    return(
        <div className="dropdown">
            <button type="button" onClick={toggler}>
               Filter by region 
               <i className="fa fa-arrow-down"></i> 
            </button>
            <div className={`drop ${active ? 'on' : ''}`}>
                <button className="dropdown-item" type="button">Africa</button>
                <button className="dropdown-item" type="button">America</button>
                <button className="dropdown-item" type="button">Asia</button>
                <button className="dropdown-item" type="button">Europa</button>
                <button className="dropdown-item" type="button">Oceania</button>
            </div>
     </div>
    )
}