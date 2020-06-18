import React, { useState, useEffect }  from 'react';
import Ticket from './Ticket';
//this is going to be the component
//  to display all tickets

//the /ticket <Route> in App.js will link 
//  to this page
const TicketList = () => {
    const[tickets,setTickets]= useState([]);

    useEffect(() =>{
        axiosWithAuth()
        .get("/tickets") //.get('http://localhost:5000/api/tickets')
        .then(res => setTickets(res.data))
        .catch(err => console.log(err.response));
      }, []);

      //supply ticket id to endpoint
      return (
        <>
        <Ticket />
          {/* <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} /> */}
        </>
      );
}

export default TicketList;