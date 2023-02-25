import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);
    const firstName = useSelector((state) => state.auth.me.firstName);


   
        return (
          <div id="navbarBox">
            <nav>
                {isLoggedIn ? (
                    <div
                        style={{ display: "flex", flexDirection: "row", height: "50%" }}
                    >
                    <Link
                        to="/my-account"
                        className="homeButton"
                        style={{ fontSize: ".8rem", height: "50px" }}
                    >
                        Welcome {firstName},
                        <br />
                        Account <small>{isAdmin ? "(Admin)" : "(Customer)"}</small>
                    </Link>
                    <Link to="/" className="homeButton">
                        Home 
                        {/* <HomeIcon /> */}
                    </Link>
                    <Link
                        to="/"
                        type="button"
                        // onClick={logoutAndRedirectHome}
                        className="logoutButton"
                    >
                        Logout 
                        {/* <LogoutIcon fontSize="small" /> */}
                    </Link>
                    {isAdmin ? (
                        <Link
                        to="/admin"
                        className="logoutButton"
                        style={{ alignSelf: "center" }}
                        >
                        {/* <SettingsSharpIcon /> */}
                        </Link>
                    ) : null}
                    </div>
                ) : (
                    <div className="loginAndSignUp">
                    {/* The navbar will show these links before you log in */}
                    
                    <Link
                        to="/login"
                        className="loginButton"
                        // onClick={showLoginSignUp}
                    >
                        Login 
                        {/* <LoginIcon fontSize="small" /> */}
                    </Link>
                    <Link
                        to="/signup"
                        className="signUpButton"
                        // onClick={showLoginSignUp}
                    >
                        Sign Up 
                        {/* <AppRegistrationIcon /> */}
                    </Link>
                    </div>
                )
            }
        </nav>
        </div>
        );
      }
    
    export default Navbar;
    