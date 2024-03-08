import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from "firebase/auth"; 
import '../styles/Header.css';

function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.error("An error happened: ", error);
        });
    };

    const handleClick = () => {
        if (user) {
            handleSignOut();
        } else {
            navigate("/login");
        }
    };

    const homeClick = () => {
        navigate("/");
    };

    return (
        <div className='header'>
            <img onClick={homeClick} className='header-logo' src='logo.png' alt=''/>
            <div className='header-nav'>
                <div className='header-nav-1'><Link to= '/' className='header-link'><span>Home</span></Link></div>
                <div className='header-nav-1'>
                    {user ? (<Link to= '/social' className='header-link'><span>Social</span></Link>) :
                    (<span>Social</span>)}
                </div>
                <div className='header-nav-1'>
                    {user ? (<Link to= '/chat' className='header-link'><span>Chat</span></Link>) :
                    (<span>Chat</span>)}
                </div>
                <div className="header-nav-1">
                    {user ? (
                        // User is signed in, display Logout button
                        <span onClick={handleClick} className="header-link">
                            Logout
                        </span>
                    ) : (
                        // User is signed out, display Login button
                        <Link to="/login" className="header-link">
                            <span>Login</span>
                        </Link>
                    )}
                </div>
                <div className='header-nav-1'><Link to='/profile' className='header-link'><span>Profile</span></Link></div>
                <div className='header-nav-account'>
                    <div className='header-nav-1 header-nav-account-btn'>
                        <span>Account</span>
                        <div className='header-nav-account-dropdown'>
                            <Link to='/settings' className='header-link'><span>Settings</span></Link>
                            {user ? (
                                // User is signed in, display Logout button
                                <span onClick={handleClick} className="header-link">
                                    Logout
                                </span>
                            ) : (
                                // User is signed out, display Login button
                                <Link to="/login" className="header-link">
                                    <span>Login</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>              
            </div>
        </div>
    );
}

export default Header;
