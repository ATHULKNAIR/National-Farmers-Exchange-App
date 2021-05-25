
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'


import {buyerLogout} from '../actions/auth'
import {getBuyerProfile} from '../services/buyerService';
import Header from '../../Header/Header';
import '../../Header/Header.css';
import './Buyer.css';

const BuyerProfile = ()=>{
  const dispatch = useDispatch()

    const [buyer,setBuyer] = useState("");
    useEffect(() => {
        getBuyerProfile().then(
          (response) => {
            const buyer = response.data 
            setBuyer(buyer); 
            // console.log(buyer.order)   
          },
          (error) => {
            const _buyer =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
            setBuyer(_buyer);
          }
        );
      }, []);
      const BLogOut = () => {
        dispatch(buyerLogout());
      }
    
      return (
        <div >
          <Header route={'/buyer/login'} LogOut={BLogOut} />

             <div className="profile-container">
               <div>
                <img src={buyer.photo} alt="Profile Pic"
                     className="profile-img-card"/>
              </div>
               <p>
                <strong>Name : </strong>{buyer.name}
            </p>
            <p>
                <strong>Phone Number : </strong>{buyer.phoneNo}
            </p>
            <p>
                <strong>Role : </strong>{buyer.role}
            </p>
            <p>
                <strong>Gender : </strong>{buyer.gender}
            </p>
            <p>
                <strong>Email : </strong>{buyer.email}
            </p>
            
            <p>
                <strong>Location : </strong>{buyer.location}
            </p>
            <p>
                <strong>Product : </strong>{buyer.product}
            </p>
            
        <div className="row">
                    
                    <Link to="/buyer/editprofile">Edit Profile</Link>
                </div>      
            </div>
            
        </div>
      );
}

export default BuyerProfile;