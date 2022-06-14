import axios from "axios";
import React, { Component } from "react";

var iniState = ""

export default class Teste extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome:"iniState",
            img:""
        }
        this.apertando = this.apertando.bind(this)
        
    }

    componentDidMount(){
        axios.get('https://restcountries.com/v3.1/region/Europe')
        .then(resposta=>{
            console.log(resposta.data[0].name.common)
        })
      
    }


     apertando(){
        this.state.nome = iniState
       this.setState(this.state)
    
     }
    

    render(){

        return(
            <section>
                <h2>Qual pais: {this.state.nome}</h2>
                <img src={this.state.img} />
                <button onClick={this.apertando}>Aperte Aqui</button>
            </section>
        )
    }
}