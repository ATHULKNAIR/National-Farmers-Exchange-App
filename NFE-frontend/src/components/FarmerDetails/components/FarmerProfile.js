import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getFarmerProfile} from '../services/farmerService';
import {farmerLogout} from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const FarmerProfile = ()=>{
  const dispatch = useDispatch()
    const [farmer,setFarmer] = useState("");
    useEffect(() => {
        getFarmerProfile().then(
          (response) => { 
            const farmer = response.data 
            setFarmer(farmer); 
              console.log(farmer) 
          },
          (error) => {
            const _farmer =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
            setFarmer(_farmer);
          }
        );
      }, []);
      const FLogOut = () => {
        dispatch(farmerLogout());
      }
    
      return (
        <div className="container">
          <Header route={'/farmer/login'} LogOut={FLogOut} />
             <div>
                <img src={farmer.photo} alt="Profile Pic"
                     className="profile-img-card"/>
                     
            </div>
            <p>
                <strong>Name : </strong>{farmer.name}
            </p>
            <p>
                <strong>Phone Number : </strong>{farmer.phoneNo}
            </p>
            <p>
                <strong>Role : </strong>{farmer.role}
            </p>
            <p>
                <strong>Gender : </strong>{farmer.gender}
            </p>
            
            <p>
                <strong>Location : </strong>{farmer.location}
            </p>
            <p>
                <strong>Product : </strong>{farmer.product}
            </p>
           
            
            
      <strong>Order:</strong>
      <ul> 

         {farmer.order &&
          farmer.order.map((orders, index) => 
          <li key={index}>Posted On : {orders.postedDate}
                  <br/>Product :{orders.product} 
                  <br/> quantity :{orders.quantity}Kg 
                  <br/> Base Price : {orders.baseRate}Rs/Kg 
                  <br/>boughtBy :{orders.boughtBy} 
                  <br/>isActive :{JSON.stringify  (orders.isActive)} 
                  <br/>Due Date : {orders.dueDate}<br/><br/>
          </li>)}
      </ul>

     
        </div>
      );
}

export default FarmerProfile;