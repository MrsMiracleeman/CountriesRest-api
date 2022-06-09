import React from "react";
import main from "../main/main";
import {Routes,Route, BrowserRouter } from "react-router-dom"
import Main from "../main/main";

export default props =>{

   
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Main regiao="home"/>}></Route>
                <Route path="africa" element = {<Main regiao="africa"/>}></Route>
                <Route path="america" element = {<Main regiao="america"/>}></Route>
                <Route path="europa" element = {<Main regiao="europa"/>}></Route>
                <Route path="asia" element = {<Main regiao="asia"/>}></Route>
                <Route path="oceania" element = {<Main regiao="oceania"/>}></Route>
            </Routes>
       </BrowserRouter>
    )
}