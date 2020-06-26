import React, { useState, useEffect, useContext }  from 'react';
import Ticket from './Ticket';
import {TicketContext} from '../contexts/TicketContext';
import axios from 'axios';
//this is going to be the component
//  to display all the tickets

//the /ticket <Route> in App.js will link 
//  to this page
const TicketList = () => {
    //state variable to hold all tickets
    const[tickets,setTickets]= useState([]);

    //fetch data after render
    useEffect(() =>{
      axios.get('https://dev-desk-backend.herokuapp.com/tickets', tickets) // live url: https://dev-desk-backend.herokuapp.com/tickets
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }, []);
    
      
    //Display loading message if no tickets
    if (tickets===0) {
      return <div>Loading ticket information...</div>;
    }
      
    return (
        <>
        {/*map over all tickets*/}
        <p>Make Sure You're Logged in First!</p>
        {tickets.map(ticket => (
          <Ticket {...ticket} />
        ))}
        </>
    );
}

export default TicketList;