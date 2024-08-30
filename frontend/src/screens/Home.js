import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Home({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("User is not logged in, redirecting to login page.");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]); 

  return (
    <>
      <Navbar />
      This is the home page.
    </>
  );
}

export default Home;
