import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';



function Login_Comp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleclick = () =>{
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <div className="bg-light d-flex flex-column justify-content-center align-item-center">
                <div>
                    <span className="m-2">Email</span>
                    <input type="email" id="email" value={email} placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <span className="m-2">Password</span>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleclick}>
                    Click me
                </button>
            
            </div>
        </>
    )
}



export default Login_Comp;