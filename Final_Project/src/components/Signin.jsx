import React, { useState } from 'react';
import './Signin.css';
import profile from './images/a.png';
import email from './images/email.jpg';
import pass from './images/pass.png';



function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignIn(username, password);
  };

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>

         </div>
         <div>
           <h1 className='login'>Login Page</h1>
           <div>
           <p className="link">
               Please Use Username  'RaviPandey' and Password 'RaviPandey'
            </p>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Enter user name" className="name" value={username} onChange={(event)=>setUsername(event.target.value)}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Enter password" className="name" value={password} onChange={(event) => setPassword(event.target.value)}/>
           </div>
          <div className="login-button">
          <button onClick={handleSubmit}><h1>Login</h1></button>
          </div>
         </div>
       </div>
     </div>
    </div>
    
  );
}
export default SignIn;

