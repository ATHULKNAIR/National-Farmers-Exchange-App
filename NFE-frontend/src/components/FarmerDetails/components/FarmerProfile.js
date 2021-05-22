import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { getFarmerProfile } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const FarmerProfile = () => {
  const dispatch = useDispatch()
  const [farmer, setFarmer] = useState("");
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

      {/* <div className="fluid jumbotron container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={farmer.photo} alt="Profile Pic" />
              <div className="profile-img-card">
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>
                {farmer.name}
              </h5>
              <h6>
                Farmer
                                    </h6>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="/farmerhome" role="tab" aria-controls="profile" aria-selected="false">Order</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>User Id</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.id}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Name</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.name}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Phone</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.phoneNo}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Role</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.role}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Gender</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.gender}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Location</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.location}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Product</label>
                </div>
                <div class="col-md-6">
                  <p>{farmer.product}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {farmer.order &&
          farmer.order.map((orders, index) =>
            <li key={index}>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row">
                  <div class="col-md-6">
                    <label>Posted On</label>
                  </div>
                  <div class="col-md-6">
                    <p>{orders.postedDate}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Products</label>
                  </div>
                  <div class="col-md-6">
                    <p>{orders.product}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Quantity</label>
                  </div>
                  <div class="col-md-6">
                    <p>{orders.quantity}Kg</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Base Price</label>
                  </div>
                  <div class="col-md-6">
                    <p>{orders.baseRate}rs/Kg</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>{JSON.stringify(orders.isActive)}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>{JSON.stringify(orders.isActive)}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Farmer's Bio</label><br />
                    <p>Farmer's description</p>
                  </div>
                </div>
              </div>
            </li>)}
      </div> */}
      <div className="row">
                    
                    <Link to="/farmer/editprofile">Edit Profile</Link>
                </div>
    </div>
  );
}

export default FarmerProfile; 