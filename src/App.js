import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
