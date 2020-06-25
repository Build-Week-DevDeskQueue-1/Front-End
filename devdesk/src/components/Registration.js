import React from 'react';
import axios from 'axios';
//import Loader from 'react-loader-spinner';

class Registration extends React.Component{
    //this is the initial state
    state = {
        newUser: {
            username:'',
            password:'',
            is_student:false,
            is_helper:false
        }
    }

    handleChange = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        });
    };

    addUser = e => {
        e.preventDefault();
        
        axios
        .post(`https://dev-desk-backend.herokuapp.com/auth/register`, this.state.newUser)
        .then(res => {
            console.log(res.data);
            //TODO: this will not be friends, but something else
            //this.setState({friends:[...res.data, res.data.payload]});
            this.setState({...res.data});
        })
        .catch(err => console.log(err));

        //TODO: Add logic to clear form on submit

        //TODO: Add logic - if helper is checked
        //  redirect to TicketList
        // -if student is checked - redirect to
        //  Your Ticket Has Been Submitted Page
        // - disallow both to be checked
    };


    render(){
        return(
            <div>
                <h3>Registration Form</h3>
                <form className="registerForm" onSubmit={this.addUser}>
                    <label>
                        <input type="text" name="username" placeholder="Username" value={this.state.newUser.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                    <input type="text" name="password" placeholder="Password" value={this.state.newUser.password} onChange={this.handleChange}/>
                    </label>
                    
                    <label>
                        Are You a Student?
                        {/* TODO: Toggle true and false*/}
                        <input
                        type="checkbox"
                        name="isStudent"
                        onChange={this.handleChange}
                        value={this.state.newUser.is_student}/>
                    </label>

                    <label>
                        Are You a Helper?
                        {/* TODO: Toggle true and false*/}
                        <input
                        type="checkbox"
                        name="isHelper"
                        onChange={this.handleChange}
                        value={this.state.newUser.is_helper}/>
                    </label>

                    <button type='submit'>Register</button>
                    
                </form>
            </div>
        )
    }
}

export default Registration;