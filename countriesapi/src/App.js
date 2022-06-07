import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
