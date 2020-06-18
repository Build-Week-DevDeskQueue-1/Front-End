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

    return (
        <div className="ticket-class">
            <h3>I am a ticket!</h3>
        </div>
    )
};

export default Ticket;