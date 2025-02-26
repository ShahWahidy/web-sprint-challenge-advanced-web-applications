import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';

const Logout = () => {        
    const {push} = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:5000/api/logout', {}, {
            headers: {
                authorization : token
            }
        })
        .then(res => {
            localStorage.removeItem('token')
            push('/login')
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return(<div>
        
    </div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.