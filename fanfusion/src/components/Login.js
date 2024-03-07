/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import {  signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import '../styles/Login.css'


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword( auth, email, password).then((auth) => {
            if (auth){
                navigate('/')
            }
        }).catch(error => alert(error.message))
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/');
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                alert(errorMessage);
            });
    };
  return (
    <div className='login'>
        <div className='login__container'>
        <Link to='/'>
            <img className='login__logo'
            src='' alt=''/>
        </Link>       
            <h1>Login</h1>
            <p>Do not have an account yet?</p>
        <Link to='/signup'><p>Create an Account</p></Link>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <button onClick={signInWithGoogle} className='login__signInWithGoogleButton'>
                    <img src={''} alt="Google Logo" className="google-logo" />
                    <span>Sign In with Google</span>
                </button>
            <p>
                By Login in you agree to FanFusion's Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            </p>

        </div>
        
      
    </div>
  )
}

export default Login
