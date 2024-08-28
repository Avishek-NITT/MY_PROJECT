import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';


// Define the component using PascalCase
function Home() {
    return (
        <>
            <Navbar/>
            This is the home page.
        </>
    );
}

// Export the component
export default Home;
