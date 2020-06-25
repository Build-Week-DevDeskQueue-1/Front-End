import axios from 'axios';

//*** This file allows us to get authentication
//      to access the custom API data
//      after person enters username/password *** 
export const AxiosWithAuth = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'https://dev-desk-backend.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
};

export default AxiosWithAuth;