import axios from 'axios';

//*** This file allows us to get authentication
//      to access the custom API data
//      after person enters username/password *** 
export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;