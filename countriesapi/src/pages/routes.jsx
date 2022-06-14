import React from "react";
import main from "../main/main";
import {Routes,Route, BrowserRouter } from "react-router-dom"
import Main from "../main/main";
import { useEffect } from "react";
import axios from "axios";

export default props =>{


var pais = window.location.pathname.slice(6)


    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element = {<Main page={false} regiao="home"/>}></Route>
                <Route path="africa" element = {<Main page={false} regiao="africa"/>}></Route>
                <Route path="america" element = {<Main page={false} regiao="america"/>}></Route>
                <Route path="europa" element = {<Main page={false} regiao="europa"/>}></Route>
                <Route path="asia" element = {<Main page={false} regiao="asia"/>}></Route>
                <Route path="oceania" element = {<Main page={false} regiao="oceania"/>}></Route>
                <Route path={window.location.pathname} element = {<Main page={true}  pais={pais}/>}></Route>       
            </Routes>
       </BrowserRouter>
    )
}