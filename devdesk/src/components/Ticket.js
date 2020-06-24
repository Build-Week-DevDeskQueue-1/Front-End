//To create a React component, we use ICE:
//  Import - Component - Export (with default)
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
// *** This file creates a Ticket component ***
//   the properties/state for each individual ticket
//     are going to be passed up to TicketList
//   Ticket is a reusable component that can create
//                  many tickets
//   TicketList is a parent component that is going
//    to hold all our child Tickets from this file
//   In another context, Ticket is the grandchild,
//     TicketList is the child, and App is the parent
const Ticket = props => {
    //this is our state variable
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
    //   fetching data is an example of a side effect
    useEffect(() => {
        axios.get(`https://dev-desk-backend.herokuapp.com/tickets`)
        .then(res => {
            console.log(res.data.results);
            setTicket(res.data.results);
        })
        .catch(error => {
            console.log("Error retrieving data");
        })
    }, []);

    //Change Handler
    const handleChange = e => {
        setTicket(e.target.value)
    }
    //What actions do we want to perform on ticket?
    //    (functions)
    //  create ticket - defined in BackEnd /data/dbaccess.js
    //  assign ticket - ""
    //  close or reopen ticket - ""
    
    // create ticket is going to involve an axios.post request
    const submitTickets = e => {
        e.preventDefault();
        axios
            .post("https://dev-desk-backend.herokuapp.com/tickets") //.get('http://localhost:5000/api/tickets')
            .then(res => setTicket(res.data))
            .catch(err => console.log(err.response));
    }
    // We may not need to define this here.
    // assign ticket is going to be an axios.put request
    // axios
    //     .put("/tickets") //.get('http://localhost:5000/api/tickets')
    //     .then(res => setTickets(res.data))
    //     .catch(err => console.log(err.response));
    
    // close/reopen ticket is going to be an axios.put request
    //  attach to dropdown toggle with class="status"
    //  change status field
    const changeStatus = e => {
        e.preventDefault();
        axios
            .put("https://dev-desk-backend.herokuapp.com/tickets/status") //.get('http://localhost:5000/api/tickets')
            .then(res => setTicket(res.data)) //instead of setTickets, create new state element for status?
            .catch(err => console.log(err.response));
    }
    // function allowing us to toggle our dropdown
    //   TODO: add prevState to our state
    const toggle = () => alert("help");//setDropdownOpen(prevState => !prevState);
    // render function is required for React components
    //   it uses JSX, which is HTML-like JavaScript
    return (
        <div className="ticket-class">
            <h3>I am a ticket!</h3>
            <form onSubmit={submitTickets}>
                {/* display id */}
                <p>Ticket ID: {props.id}</p>
                {/* display and add title */}
                <input type="text" 
                value={props.title} 
                onChange={handleChange}
                placeholder="It's Not Working!!"    
                />
                {/* display description */}
                <input type="textarea" 
                value={props.description} 
                onChange={handleChange}    
                />
                {/* display what user has "tried" */}
                <input type="textarea" 
                value={props.tried} 
                onChange={handleChange}    
                />
                {/* Dropdowns are reactstrap components*/}
                {/* https://reactstrap.github.io/components/dropdowns/ */}
                {/* display ticket "category" */}
                <Dropdown toggle={toggle} />
                    <DropdownToggle caret>
                        Category
                        </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Low</DropdownItem>
                        <DropdownItem>Medium</DropdownItem>
                        <DropdownItem>High</DropdownItem>
                        <DropdownItem>Critical</DropdownItem>
                    </DropdownMenu>
                {/* display ticket "status" */}
                <Dropdown toggle={toggle} />
                    <DropdownToggle caret>
                        Status
                        </DropdownToggle>

                    <DropdownMenu class="status">
                        <DropdownItem>Open</DropdownItem>
                        <DropdownItem>Reopen</DropdownItem>
                        <DropdownItem>Closed</DropdownItem>
                    </DropdownMenu>
                <button type='submit'>Submit Ticket</button>
            </form>
        </div>
    )
};

//this is our required default export
export default Ticket;