import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js';
import Projects from './components/Projects';
import ContactFrom from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact-me'>
            <ContactFrom />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
