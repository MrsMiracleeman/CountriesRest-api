import React from "react";
import Busca from "./busca/busca";
import Filtros from "./filtros/filtros";
import './main.css'

export default props=>{
    return(
        <main className="Main">
            <div id="buscar">
                <Busca />
            </div>
            <div id="filtros">
                <Filtros />
            </div>
            <section id="lista">

            </section>
        </main>
    )
}