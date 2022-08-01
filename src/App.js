import logo from './logo.svg';
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import {Banner} from './components/LandingPage/Banner';
import {Skills} from './components/LandingPage/Skills';
import {Land} from './components/LandingPage/Land';
import {Photography} from './components/Photography/Photography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Traveling } from './components/Photography/Traveling';
import { Animals } from './components/Photography/Animals';
import { Portrait } from './components/Photography/Portrait';
import { Footer } from './components/Footer';

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
        
        
        </Routes>
        <Footer/>
       </Router>
        

    </div>
    
    
  );
}

export default App;
