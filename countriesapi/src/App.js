import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react';
import Routes from './pages/routes';
import Teste from './testes/testes';
import Testes01 from './testes/testes01';

function App() {

    // const [pais,setPais] = useState([])

    // axios.get('https://restcountries.com/v3.1/all')
    // .then(resposta=>{
    //   setPais(resposta.data)
    // })



  return (
      <div className="App">
          <Header />
          <Routes />
          <Footer />
      </div>

  );
}

export default App;
