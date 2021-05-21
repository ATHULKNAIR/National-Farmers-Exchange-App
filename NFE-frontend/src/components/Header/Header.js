import React from 'react';
import "./Header.css";
import farm from '../images/f-logo.jpg';
import industry from '../images/i-logo.jpg';




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
            <div>
           
                <a href={route} className="nav-link" onClick={LogOut}><button>
                    LogOut
                </button>

                </a>

            </div>

        </header>
        
        </div>
        
    )
}

export default Header
