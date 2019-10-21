import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Route from 'react-router-dom';
import Landingpage from './Components/landingPage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Route path ="/" exact component={Landingpage}/ >

      </div>
    </Router>
  );
}

export default App;
