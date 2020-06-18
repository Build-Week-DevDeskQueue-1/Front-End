//To create a React component, we use ICE:
//  Import - Component - Export (with default)
import React, { useState, useEffect } from "react";

// *** This file creates a Ticket component ***
//   the properties/state for each individual ticket
//     are going to be passed up to TicketList
//   Ticket is a reusable component that can create
//                  many tickets
//   TicketList is a parent component that is going
//    to hold all our child Tickets from this file
const Ticket = () => {
    const [ticket, setTicket] = useState([]);
    //what properties does ticket contain? :
    //  (all of these properties can be accessed
    //   from one state variable called ticket)
    //  id
    //  title
    //  description
    //  tried
    //  category
    //  status

    // properties for other files besides this one:
    //  student.username
    //  helper.username

    // UseEffect is a React hook that lets us perform
    //   an action after a render takes place
    // In this case, it allows us to fetch data
    // useEffect(() => {
    //     const generateBubbleData = colors.map((_, i) => ({
    //       value: Math.floor(Math.random() * (colors.length * 2)) + 1,
    //       key: `${i + 1}`
    //     }));
    //     setBubbleData(generateBubbleData);
    //   }, [colors]);

    //What actions do we want to perform on ticket?
    //  create ticket - defined in BackEnd /data/dbaccess.js
    //  assign ticket - ""
    //  close or reopen ticket - ""
    
    // render function is required for React components
    //   it uses JSX, which is HTML-like JavaScript
    return (
        <div className="ticket-class">
            <h3>I am a ticket!</h3>
        </div>
    )
};

//this is our required default export
export default Ticket;