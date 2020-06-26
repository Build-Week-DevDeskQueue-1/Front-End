import React from 'react';
import './App.css';
import './css/index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
//TODO: Relocate these to a Routes.js file
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Ticket from "./components/Ticket";
import TicketList from "./components/TicketList";
import ThankYou from "./components/ThankYou";
//Context API
import {TicketContext} from './contexts/TicketContext';

axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
      <Helmet>
        <title>DevDesk Ticketing System</title>
      </Helmet>
      {/* LOGO */}
      <a href='https://lambdaschool.com/' target="_blank" rel="noopener noreferrer" class="logo"><img src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5dcda59e63bb6ae5c9282801_small-red-logo.png" alt="Lambda school logo" width="250px" /></a>
      <h1>DevDesk Ticketing System</h1>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout} />
          <Route path="/thankyou" component={ThankYou} />
          <PrivateRoute path="/ticket" component={Ticket}
          render={props=>(
            <Ticket {...props} />
          )} />
          <PrivateRoute path="/ticketlist" component={TicketList}
          render={props=>(
            <Ticket {...props} />
          )} />
        </Router>
    </div>
  );
}

export default App;