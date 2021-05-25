import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import farm from '../images/f-logo.jpg';
import business from '../images/i-logo.jpg'; 
import logo from '../images/f-logo.jpg';
import industry from '../images/i-logo.jpg';



function Home() {
    return (
        <div className="landing-page">
            
            <header className="head">
            <img src={logo} className="farm" alt="farm" />
            <div className="title">
                <h1>NFE</h1>

                <p>National Farmer's Market</p>
            </div>
            <img src={industry} className="industry" alt="industry" />
            
        </header>
               

            <div className="row">
                <div className="col-md">
            <div className="card text-center">
                <div className="overflow">
                    <img src={farm}  alt="farmer" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">Farmer Login</h4>
                    <p className="card-text text-secondary">Please click below button to login or create a profile</p>
                </div>
                <Link to="/farmer/login"><button type="button" className="btn btn-primary">Farmer Login</button></Link>
            </div>
            </div>
            <div className="col-md">
            <div className="card text-center">
                <div className="overflow">
                    <img src={business}  alt="buyer" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">Business Login</h4>
                    <p className="card-text text-secondary">Please click below button to login or create a Buyer profile</p>
                </div>
                <Link to="/buyer/login"><a className="btn btn-primary">Buyer Login</a></Link>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Home
