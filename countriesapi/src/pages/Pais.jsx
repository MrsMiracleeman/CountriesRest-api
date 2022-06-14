import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "../main/cards/cards";
import './pais.css'

export default props=>{

    var mod = ""
    const baseUrl = "https://restcountries.com/v3.1/name/"
    const getBorders = async (pais) =>{
        setPais(pais)

    }
    const [pais,setPais] = useState ({})


    useEffect(()=>{
     axios.get(`${baseUrl}${props.pais}`)
     .then(resposta=>{
        mod = resposta.data[0]


        let obj = {
            nome:resposta.data[0].name.common,
            population:resposta.data[0].population,
            region:resposta.data[0].region,
            subRegion:resposta.data[0].subregion,
            capital:resposta.data[0].capital,
            timer:resposta.data[0].timezones,
            // currencies:resposta.data[0].currencies.ARS.name,
            languages:resposta.data[0].languages.spa,
            borders:resposta.data[0].borders,
            flag:resposta.data[0].flags.png
        }
        getBorders(obj)
        // setPais(obj)
    
     })
    },[0])

    return(
        <section id="Pais" >
            <div id="Back">
                <i className="fa fa-long-arrow-left fa-lg"></i>
                <a href="/">Voltar</a>
            </div>
            <aside>
                <img src={pais.flag} alt={`Bandeira do pais ${pais.nome}`}/>
            </aside>
           <h2 id="titles">{pais.nome}</h2>
            <div id="pais-list">
                <ul>
                    <li><strong>População: </strong>{pais.population}</li>
                    <li><strong>Região: </strong>{pais.region}</li>
                    <li><strong>Sub-Região: </strong>{pais.subRegion}</li>
                    <li><strong>Capital: </strong>{pais.capital}</li>
                    <li><strong>Zonas-horárias: </strong>{pais.timer}</li>
                    <li><strong>Moeda: </strong>{pais.currencies}</li>
                    <li><strong>Idiomas : </strong>{pais.languages}</li>
                </ul>
                <div>
                    <li><strong>Fronteiras: </strong>{` ${pais.borders}`}</li>
                </div>     
            </div>

        </section>
    )
}