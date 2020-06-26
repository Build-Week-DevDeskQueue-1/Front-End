import React,{useState} from 'react';
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

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
          .post(`https://dev-desk-backend.herokuapp.com/auth/login`, credentials)
          .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/ticket');
          })
          .catch(err => console.log(err));
        //setCredentials({ username: '', password: '' });
      }
    
    //function to refresh page
    // function refreshPage(){ 
    //   window.location.reload(); 
    // }

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
              <button type='submit'>
                <Router>
                      <Link to="/ticket">Login</Link>
                </Router>
              </button> 
              <button>
              <Router>
                <Link to="/register">Register</Link>
              </Router>
              </button>  
            </div>   
        </form>
    )

}

export default Login;