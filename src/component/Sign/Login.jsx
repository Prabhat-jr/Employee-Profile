import React,{useState} from 'react'
import "./Login.css";
import {Link, useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebaseConfig';
const Login = () => {
    const [email, setEmail] =useState();
    const [password,setPassword] =useState();
    
  
     const navigate=useNavigate()
    const loginHandler=()=>{
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
          console.log(user)
         // navigate("/timer")
        }).catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
if(errorCode ==="auth/user-not-found"){
  createUserWithEmailAndPassword(auth,email,password).then((user)=>{
    console.log(user)

    //navigate("/Login")
   }).catch((error)=>{
       const errorCode = error.code;
       const errorMessage = error.message;
   })
} else{

}
        })
    }
  return (
    <div className='loginform'>
    <div className='signuppage'>
    <h1 className='headingtitle'>Employee and Admin login/Signup</h1>
        <div className='Emailline'>
        <label className='inputname'>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" className='inputform' placeholder='Email' name='email'/>
        </div>
        <div className='Emailline'>
        <label className='inputpassword'>Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='inputform' placeholder='Password' name='email'/>
        <button className='btn' onClick={loginHandler}>Login / SignUp</button>
        </div>
        </div>
       </div>
  )
}

export default Login