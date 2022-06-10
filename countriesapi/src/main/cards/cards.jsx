import React, { Component } from "react";
import Pais from "../../pages/Pais";
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
        this.ativando = this.ativando.bind(this)
    }


    ativando(){

        return (
            <Pais />
        )
    }


    render(){

        return(
            <section id="Cards" onClick={evento => window.location.href=`pais/${this.state.nome}`}>
                <div>
                    <img src={this.state.img}/>
                </div>
                <ul >
                    <h6>{this.state.nome} </h6>
                    <li><strong>População: </strong>{this.state.populacao} </li>
                    <li><strong>Região: </strong> {this.state.regiao} </li>
                    <li><strong>Capital: </strong>{this.state.capital}</li>
                </ul>
            </section>
        )
    }
}