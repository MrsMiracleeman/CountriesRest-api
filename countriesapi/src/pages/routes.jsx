import React from "react";
import main from "../main/main";
import {Routes,Route, BrowserRouter } from "react-router-dom"
import Main from "../main/main";

export default props =>{

   
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Main />}></Route>
                <Route path="africa" element = {<Main regiao="africa"/>}></Route>
            </Routes>
       </BrowserRouter>
    )
}