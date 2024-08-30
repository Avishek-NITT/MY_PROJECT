import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home'; 

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home isLoggedIn = {isLoggedIn} />} /> 
                    <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn} />} /> 
                    <Route path="/signup" element={<Signup />} /> 
                </Routes>
            </Router>
        </>
    )
}


export default App;