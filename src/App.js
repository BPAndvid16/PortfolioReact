import logo from './logo.svg';
import './App.css';
import {NavigationBar} from './js/NavigationBar';
import {Banner} from './js/LandingPage/Banner';
import {Skills} from './js/LandingPage/Skills';
import {Land} from './js/LandingPage/Land';
import {Photography} from './js/Photography/Photography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Traveling } from './js/Photography/Traveling';
import { Animals } from './js/Photography/Animals';
import { Portrait } from './js/Photography/Portrait';
import { Footer } from './js/Footer';
import { Videography } from './js/Photography/Videography';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

function App() {
  return (
    <div className="App">

     

      <Router>

        <NavigationBar/>

        <Routes>

        <Route path="/" element = {<Land/>}/>

        <Route path="/Photography" element = {<Photography/>}/>
        <Route path="/Traveling" element = {<Traveling/>}/>
        <Route path="/Animals" element = {<Animals/>}/>
        <Route path="/Portrait" element = {<Portrait/>}/>
        <Route path="/Videography" element = {<Videography/>}/>
        
        
        </Routes>
        <Footer/>
       </Router>
        

    </div>
    
    
  );
}

export default App;
