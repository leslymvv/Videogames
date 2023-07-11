import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import DetailVideogame from "./components/DetailVideogame/DetailVideogame";
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/create' component={CreateVideogame} />
          <Route exact path='/about' component={About} />
          <Route exact path='/detailvideogame/:id' component={DetailVideogame} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;