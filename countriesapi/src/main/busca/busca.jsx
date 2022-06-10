import React, { Component } from "react";
import './busca.css'

export default class Busca extends Component{

    render(){

        return(
        <form id="form-busca" action="">
            <div>
                <i className="fa fa-search fa-lg"></i>
            </div>
            <input type="search" placeholder="Search for a country..."/>
        </form>
        )
    }
}