import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Login_Comp from '../components/Login_component';

// Define the component using PascalCase
function Login() {
    return (
        <>
            <Navbar/>

            This is the login page

            <Login_Comp/>
        </>
    );
}

// Export the component
export default Login;
