import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ThankYou = () => {

    //function to refresh page
    function refreshPage(){ 
        window.location.reload(); 
    }
    
    return (
        <div className="thankyou">
            <h1>Thank You For Your Submission!</h1>
            <button>View Status of Your Ticket</button>
            <p>Are You a Helper?</p>
            <button onClick={ refreshPage }><Router>
                    {/* <Route path="/logout" component={Logout} /> */}
                    <Link to="/ticketlist">View All Tickets</Link>
                </Router></button>
        </div>
    )

}

export default ThankYou;