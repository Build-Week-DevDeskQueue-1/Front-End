import React from 'react';
import axios from 'axios';
//import Loader from 'react-loader-spinner';


class Registration extends React.Component{
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
        // this.setState({
        //     is_student:true,
        //     is_helper:false
        // });

        axios
        .post(`https://dev-desk-backend.herokuapp.com/auth/register`, this.state.newUser)
        .then(res => {
            console.log(res.data);
            //TODO: this will not be friends, but something else
            this.setState({friends:[...res.data, res.data.payload]});
        })
        .catch(err => console.log(err));
    };


    render(){
        return(
            <div>
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
                    
                    {/* {this.state.isStudent && (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height={60} width={60} />
                        <p>Loading...</p>
                    </div>
                     )}

                     {this.state.isHelper && (
                        <div className="key spinner">
                            <Loader type="Puff" color="#204963" height={60} width={60} />
                            <p>Loading...</p>
                        </div>
                     )} */}

                </form>
            </div>
        )
    }
}

export default Registration;