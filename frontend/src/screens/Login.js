import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Login_Comp from '../components/Login_component';

// Define the component using PascalCase
function Login({setIsLoggedIn}) {
    return (
        <>
            <Navbar/>
            This is the login page
            <Login_Comp setIsLoggedIn = {setIsLoggedIn}/>
        </>
    );
}

// Export the component
export default Login;
