import React, { Component } from "react";
import './cards.css'




export default class Cards extends Component{

    constructor(props){
        super(props)
        this.state = {
            img:props.img,
            nome:props.nome,
            populacao:props.populacao,
            regiao:props.regiao,
            capital:props.capital
        }
    }

    render(){

        return(
            <section id="Cards">
                <div>
                    <img src={this.state.img}/>
                </div>
                <ul>
                    <h2>{this.state.nome} </h2>
                    <li><strong>População: </strong>{this.state.populacao} </li>
                    <li><strong>Região: </strong> {this.state.regiao} </li>
                    <li><strong>Capital: </strong>{this.state.capital}</li>
                </ul>
            </section>
        )
    }
}