import React,{useState} from 'react';
import {BrowserRouter as Router, Route , useHistory} from 'react-router-dom';
import axios from 'axios';
import Registration from './Registration';
import Logout from './Logout';


const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const history = useHistory();

    //change handler
    const handleChange = e => {
        setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
        })
    }

    const logins = e => {
        e.preventDefault();
        axios
          .post(`https://dev-desk-backend.herokuapp.com/auth/login`, credentials) ///api/login
          .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/ticket');
          })
          .catch(err => console.log(err));
        setCredentials({ username: '', password: '' });
      }

    return (
        <form className="loginForm" onSubmit={logins}>
            <div className="labels">
            <label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={credentials.username}/>
            </label>            
            <label>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={credentials.password}/>
            </label> 
            </div>     
            <div className="buttons">
              <button type='submit'>Login</button> 
              <button>
              <Router>
                <Route path="/logout" component={Logout} />
              </Router>
                Logout</button>
              <button>
              <Router>
                <Route path="/register" component={Registration} />
              </Router>
              Register</button>  
            </div>   
        </form>
    )

}

export default Login;
// Login.js....
//          import react
//          , {useState, useEffect 
//          }.....state will be username, password (you can do this as two separate fields or a single field
         
//             )......the axios call....in the JSX, you will map over username and password somewhere
