import React, { useState, useEffect } from "react";

const Ticket = () => {
    // const [bubbleData, setBubbleData] = useState([]);

    // useEffect(() => {
    //     const generateBubbleData = colors.map((_, i) => ({
    //       value: Math.floor(Math.random() * (colors.length * 2)) + 1,
    //       key: `${i + 1}`
    //     }));
    //     setBubbleData(generateBubbleData);
    //   }, [colors]);

    //supply ticket id to endpoint

      //ticket routes on backend so far are:
      // /tickets, tickets/assign, and tickets/status
    return (
        <div className="ticket-class">
            <h3>I am a ticket!</h3>
        </div>
    )
};

export default Ticket;