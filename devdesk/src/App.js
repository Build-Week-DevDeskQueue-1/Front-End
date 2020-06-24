import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Ticket from "./components/Ticket";

function App() {

  return (
    <div className="App">
      <h1>DevDesk Ticketing System</h1>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Registration} />
          <PrivateRoute path="/ticket" component={Ticket}
          render={props=>(
            <Ticket {...props} />
          )} />
        </Router>
    </div>
  );
}

export default App;
