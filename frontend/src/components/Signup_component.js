import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Signup_comp(){
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleclick = () =>{
        console.log(userName);
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <div className="bg-light d-flex flex-column justify-content-center align-item-center">
                <div>
                    <span className="m-2">Username</span>
                    <input type="email" id="username" value={userName} placeholder="Enter UserName" onChange={(e) => setuserName(e.target.value)}/>
                </div>
                <div>
                    <span className="m-2">Email</span>
                    <input type="email" id="email" value={email} placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <span className="m-2">Password</span>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <span> Already registered? </span>
                <Link to="/login">Login</Link>
                <button onClick={handleclick}>
                    SIGN UP
                </button>

            </div>
        </>
    )
}


export default Signup_comp;