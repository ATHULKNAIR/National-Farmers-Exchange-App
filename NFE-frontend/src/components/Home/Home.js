  
import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
import farm from '../images/f-logo.jpg';
import industry from '../images/i-logo.jpg';

function Home() {
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
        <div className="home_page">
            <div className="row">
                    
                    <Link to="/farmer/login">Farmer</Link>
                </div>
                <div className="row">
                   
                    <Link to="/buyer/login">Buyer</Link>
                </div>
        </div>
        </div>
    )
}

export default Home