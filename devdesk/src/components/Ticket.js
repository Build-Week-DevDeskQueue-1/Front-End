//To create a React component, we use ICE:
//  Import - Component - Export (with default)
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
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
    //const [dropdownOpen, setDropdownOpen] = useState(false);
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
    //TODO: When submitTickets is called, user is redirected to Ticket List
    //  or to a page or message that says "Your Ticket Has Been Submitted!"
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

    //function to refresh page
    function refreshPage(){ 
        window.location.reload(); 
    }

    // function allowing us to toggle our dropdown
    //   TODO: add prevState to our state
    //const toggle = () => setDropdownOpen(prevState => !prevState);//setDropdownOpen(prevState => !prevState);
    // render function is required for React components
    //   it uses JSX, which is HTML-like JavaScript
    return (
        <div className="ticket-class">
            <h3>I am a ticket!</h3>
            <form className="ticketForm" onSubmit={submitTickets}>
                {/* display id */}
                <p>Ticket ID: {props.id}</p>
                {/* display and add title */}
                <div className="textblock">
                <label>Title</label>
                    <input type="text" 
                    value={props.title} 
                    onChange={handleChange}
                    placeholder="It's Not Working!!"    
                    />
                </div>
                {/* display description */}
                <div className="textblock">
                <label>Description</label>
                    <textarea
                    cols="50" 
                    value={props.description} 
                    onChange={handleChange}
                    placeholder="My PC Exploded"   
                    />
                </div>
                {/* display what user has "tried" */}
                <div className="textblock">
                <label>What Has Been Tried ?</label>
                <textarea
                cols="50"
                value={props.tried} 
                onChange={handleChange} 
                placeholder="I did no troubleshooting"   
                />                
                </div>
                <div className="buttons">
                {/* Dropdowns are reactstrap components*/}
                {/* https://reactstrap.github.io/components/dropdowns/ */}
                {/* display ticket "category" */}
                {/* <Dropdown isOpen={dropdownOpen} toggle={toggle} value={props.category}>
                    <DropdownToggle caret>
                        Category
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Category</DropdownItem>
                        <DropdownItem>Low</DropdownItem>
                        <DropdownItem>Medium</DropdownItem>
                        <DropdownItem>High</DropdownItem>
                        <DropdownItem>Critical</DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
                <DropdownButton id="dropdown1" title="Category">
                    <Dropdown.Item as="button">Low</Dropdown.Item>
                    <Dropdown.Item as="button">Medium</Dropdown.Item>
                    <Dropdown.Item as="button">High</Dropdown.Item>
                    <Dropdown.Item as="button">Critical</Dropdown.Item>
                </DropdownButton>
                {/* display ticket "status" */}
                {/* <Dropdown toggle={toggle} value={props.status}>
                    <DropdownToggle caret>
                        Status
                        </DropdownToggle>
                    <DropdownMenu class="status">
                        <DropdownItem>Open</DropdownItem>
                        <DropdownItem>Reopen</DropdownItem>
                        <DropdownItem>Closed</DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
                <Dropdown id="dropdown2">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Status
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button">Open</Dropdown.Item>
                        <Dropdown.Item as="button">Reopen</Dropdown.Item>
                        <Dropdown.Item as="button">Closed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button onClick={ refreshPage }>
                <Router>
                    {/* <Route path="/logout" component={Logout} /> */}
                    <Link to="/logout">Logout</Link>
                </Router>
                </button>
                <button type='submit' onClick={ refreshPage }><Router>
                    {/* <Route path="/logout" component={Logout} /> */}
                    <Link to="/thankyou">Submit Ticket</Link>
                </Router></button>
                </div>
            </form>
        </div>
    )
};

//this is our required default export
export default Ticket;