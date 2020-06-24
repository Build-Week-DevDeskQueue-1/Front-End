import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <h1>DevDesk Ticketing System</h1>
        <Router>
          <Route exact path="/" component={Login} />
        </Router>
        
        {/*
         
         
         <Router> and <Route>
         
         add routes /login and  /ticket
         
*/}
    </div>
  );
}

export default App;
