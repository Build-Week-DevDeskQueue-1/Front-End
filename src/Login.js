import React,{useState, useEffect} from 'react';
import axios from 'axios';


const Login = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState({ username: '', password: '' });

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
          .get(`https://dev-desk-backend.herokuapp.com//api/login`, credentials) ///api/login
          .then(res => {
            localStorage.setItem('token', res.data.payload);
          })
          .catch(err => console.log(err));
        setCredentials({ username: '', password: '' });
      }

    return (
        <form onSubmit={logins}>
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

            <button type='submit'>Login</button>      
        </form>
    )

}

export default Login;
// Login.js....
//          import react
//          , {useState, useEffect 
//          }.....state will be username, password (you can do this as two separate fields or a single field
         
//             )......the axios call....in the JSX, you will map over username and password somewhere