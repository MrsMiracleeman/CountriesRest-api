import React, { useEffect, useState } from "react";
import Busca from "./busca/busca";
import Cards from "./cards/cards";
import Filtros from "./filtros/filtros";
import './main.css'
import axios from "axios"
import Pais from "../pages/Pais";




export default props=>{


    var msgError = ""
    
    
    var list = []
    const [pais,setPais] = useState([])
    const [erro,setErro] = useState(false)
 
        axios.get('https://restcountries.com/v3.1/all')
        .then(resposta=>{
            filterHome(resposta.data)
        
        })
        .catch(resposta=>{
            setErro(true)
            msgError = resposta.message
            console.log(msgError)
        })
        
        function filterHome(paises){
            
            if(props.regiao === "home"){
                paises.forEach(element => {
                    if(element.name.common === "Russia" || element.name.common === "Brazil" || 
                       element.name.common === "United States" || element.name.common === "Argentina" ||
                        element.name.common === "Japan" || element.name.common === "Algeria" || element.name.common === "Cuba" || element.name.common === "Greece"
                    ){
                        list.push(element)
                    }
                });
            }else if(props.regiao === "africa"){
                paises.forEach(element=>{
                    if(element.region === "Africa"){
                        list.push(element)
                    }
                })
            }else if(props.regiao === "america"){
                paises.forEach(element=>{
                    if(element.region === "Americas"){
                        list.push(element)
                    }
                })
            }else if(props.regiao === "europa"){
                paises.forEach(element=>{
                    if(element.region === "Europe"){
                        list.push(element)
                    }
                })
            }else if(props.regiao === "asia"){
                paises.forEach(element=>{
                    if(element.region === "Asia"){
                        list.push(element)
                    }
                })
            }else if(props.regiao === "oceania"){
                paises.forEach(element=>{
                    if(element.region === "Oceania"){
                        list.push(element)
                    }
                })
            }

           
            if(list.length != null){
                setPais(list)
            }
        }


    if(props.page === false){
        return(
            <main className="Main">
                <div id="buscar">
                    <Busca />
                </div>
                <div id="filtros">
                    <Filtros />
                </div>
                <section id="lista">
                    {pais.map((e,i)=>{
                        return(
                            <Cards   key={i} img = {e.flags.png}nome={e.name.common} populacao={e.population} regiao={e.region} capital={e.capital} />
                        )
                    })}
                </section>
            </main>
        )
    }else if(props.page === true){
        return(
            <main className="Main">
                <Pais pais={props.pais}/>
            </main>
                    
        )
    }else if(erro === true){
        return(
            <div>
                Erro
            </div>
        )

        }
    
}