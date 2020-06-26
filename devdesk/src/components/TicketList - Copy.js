import React, { useState, useEffect, useContext }  from 'react';
import Ticket from './Ticket';
import {TicketContext} from '../contexts/TicketContext';
import axios from 'axios';
//this is going to be the component
//  to display all the tickets

//Refer to this project for additional assistance:
//https://github.com/cknoettg/react-bubbles/blob/corey-knoettgen/client/src/components/BubblePage.js

//the /ticket <Route> in App.js will link 
//  to this page
const TicketList = () => {
    //state variable to hold all tickets
    const[tickets,setTickets]= useState([]);

    //fetch data after render
    useEffect(() =>{
        axios
          .get("https://dev-desk-backend.herokuapp.com/tickets") //.get('http://localhost:5000/api/tickets')
          .then(res =>{
             setTickets(res.data)
             console.log(res.data)
          })
          .catch(err => console.log(err.response));
      }, []);
    
    //change handlers - may not be needed here
    // const handleChange = e => {
    //   setTickets({[e.target.name]: e.target.value})
    // }
    
      //don't forget: supply ticket id to endpoint

      //ticket routes on backend so far are:
      // /tickets, tickets/assign, and tickets/status
    
    //Display loading message if no tickets
    if (!tickets) {
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