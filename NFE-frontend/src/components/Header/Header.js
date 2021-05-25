import React from 'react';
import "./Header.css";
import farm from '../images/f-logo.jpg';
import industry from '../images/i-logo.jpg';
import {Navbar , Nav } from 'react-bootstrap';




function Header({LogOut,route}) {
    return (
        <div>
            <header className="head">
            <img src={farm} className="farm" alt="farm" />
            <div className="title">
                <h1>NFE</h1>

                <p>National Farmer's Market</p>
            </div>
            <img src={industry} className="industry" alt="industry" />
            

        </header>
        {/* <div className="navbar"> */}
            <Navbar   >
                <Nav className="mr-auto">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <a href={route} onClick={LogOut}> <button  className="btn btn-danger" >Logout</button></a>
                </Nav>
            </Navbar> 
        {/* </div> */}
        
        </div>
    )
}

export default Header
