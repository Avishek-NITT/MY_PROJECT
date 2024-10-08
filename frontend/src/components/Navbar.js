import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';


function Navbar() {

    


    return (  //This is a navbar
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">FALCON </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <button className="btn border-0" onClick={home_route}>Home </button> */}
                            <Link className="btn border-0" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn border-0" to="/">Temp</Link>
                        </li>
                    </ul>
                 </div>

                <div>
                    <Link className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" to="/login">Login</Link>
                    <Link className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" to="/signup">Signup</Link> 
                </div>

            </nav>
                    


                    
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}



                    {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
        </>
    );
}

// Export the component
export default Navbar;
