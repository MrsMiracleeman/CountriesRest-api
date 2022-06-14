import axios from "axios";
import React from "react";

export default props=>{

    // const baseUrl = 'https://restcountries.com/v3.1/name/'
    // const basicFec = async(endpoint) =>{
    //     axios.get(baseUrl + endpoint)
    //     .then(resposta=>{
    //         console.log(resposta.data[0])
    //     })
        
    // }

    // basicFec("Brazil")

    function somar(a,b){
        console.log(a+b)
    }

    const mi = setTimeout(somar(),5000)

    return(
        <div>
           
        </div>
    )
}