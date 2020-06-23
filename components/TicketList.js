import React, { useState, useEffect }  from 'react';
import Ticket from './Ticket';
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
        axios
        .get("/tickets") //.get('http://localhost:5000/api/tickets')
        .then(res => setTickets(res.data))
        .catch(err => console.log(err.response));
      }, []);

      //don't forget: supply ticket id to endpoint

      //ticket routes on backend so far are:
      // /tickets, tickets/assign, and tickets/status
      
      
      return (
        <>
        <Ticket />
          {/* <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} /> */}
        </>
      );
}

export default TicketList;