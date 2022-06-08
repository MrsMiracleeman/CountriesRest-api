import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState } from 'react';

function App() {

    // const [pais,setPais] = useState([])

    // axios.get('https://restcountries.com/v3.1/all')
    // .then(resposta=>{
    //   setPais(resposta.data)
    // })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
