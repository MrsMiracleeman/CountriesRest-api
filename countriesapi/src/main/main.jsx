import React, { useState } from "react";
import Busca from "./busca/busca";
import Cards from "./cards/cards";
import Filtros from "./filtros/filtros";
import './main.css'
import axios from "axios"


export default props=>{

        var list = []
       const [pais,setPais] = useState([])

        axios.get('https://restcountries.com/v3.1/all')
        .then(resposta=>{
            // console.log(resposta.data[0].flags.png)
            // console.log(resposta.data[0].name.common)
            // console.log(resposta.data[0].population)
            // console.log(resposta.data[0].region)
            // console.log(resposta.data[0].capital)
            filterHome(resposta.data)
        })

  
        function filterHome(paises){
            paises.forEach(element => {
                if(element.name.common === "Germany" || element.name.common === "Brazil" ||
                    element.name.common === "United States of America" || element.name.common === "Iceland"
                    || element.name.common === "Afghanistan" || element.name.common === "Argentina" ||
                    element.name.common === "Albania" || element.name.common === "Algeria"
                ){
                    list.push(element)
                    setPais(list)
                }
            });

        }

    if(pais.length >= 0){
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
                            <Cards key={i} img = {e.flags.png}nome={e.name.common} populacao={e.population} regiao={e.region} capital={e.capital} />
                        )
                    })}
                </section>
            </main>
        )
    }
    // return(
    //     <main className="Main">
    //         <div id="buscar">
    //             <Busca />
    //         </div>
    //         <div id="filtros">
    //             <Filtros />
    //         </div>
    //         <section id="lista">
    
    //         </section>
    //     </main>
    // )
}