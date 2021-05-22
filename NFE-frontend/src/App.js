
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import {history} from './components/helpers/history';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contract from './components/ContractFarm/Contract';
import Bidding from './components/Bidding/Bidding';
import Products from './components/Products/Product.js';
import PriceBoard from './components/PriceBoard/PriceBoard';
import Notifications from './components/Notifications/Notifications.js';
import Profile from './components/Profile/FarmerProfile';

import FarmerRegsiter from './components/FarmerDetails/components/FarmerRegister';
import BuyerRegsiter from './components/BuyerDetails/components/BuyerRegister';

import FarmerLogin from './components/FarmerDetails/components/FarmerLogin';
import BuyerLogin from './components/BuyerDetails/components/BuyerLogin';

import BuyerProfile from './components/BuyerDetails/components/BuyerProfile';
import FarmerProfile from './components/FarmerDetails/components/FarmerProfile';

import FarmerHome from './components/FarmerDetails/components/FarmerHome';
import BuyerHome from './components/BuyerDetails/components/BuyerHome';

import FarmerCreateOrder from './components/FarmerDetails/components/FarmerCreateOrder';
import BuyerCreateOrder from './components/BuyerDetails/components/BuyerCreateOrder';

import FarmerEditProfile from './components/FarmerDetails/components/FarmerEditProfile';

import FarmerOrder from './components/FarmerDetails/components/FarmerOrder';

import UpdateFarmerOrder from './components/FarmerDetails/components/UpdateFarmerOrder';

import FarmerAgreeOrder from './components/FarmerDetails/components/FarmerAgreeOrder';

import FarmerHistory from './components/FarmerDetails/components/FarmerHistory';
import FarmerOrderHistory from './components/FarmerDetails/components/FarmerOrderHistory';

import {clearMessage} from './components/BuyerDetails/actions/messages'
import FarmerNotification from "./components/FarmerDetails/components/FarmerNotification";


function App() {

  const { user: currentUser } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch])

  // const BLogOut = () => {
  //   dispatch(buyerLogout());
  // }
  // const FLogOut = () => {
  //   dispatch(farmerLogout());
  // }

  return (
    <Router history={history}>
        <div>
        
        
          {/* {currentUser?.role == "Buyer" && (
            <Header currentUser={currentUser} LogOut={BLogOut} route={"/buyer/login"} />
            
          )}

          {currentUser?.role == "Farmer" && (
            <Header  currentUser={currentUser} LogOut={FLogOut} route={"/farmer/login"} />

          )}

          {currentUser?.role == "BuyerAdmin" && (
             <Header  currentUser={currentUser} LogOut={BLogOut} route={"/buyer/login"} />
          )}
          {currentUser?.role == "FarmerAdmin" && (
             <Header  urrentUser={currentUser} LogOut={FLogOut} route={"/farmer/login"} />
          )} */}

         
<div className="container mt-3">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/farmer/login' component={FarmerLogin}/>
            <Route exact path='/buyer/login' component={BuyerLogin}/>

            <Route exact path='/farmer/register' component={FarmerRegsiter}/>
            <Route exact path='/buyer/register' component={BuyerRegsiter}/>

            <Route  path='/buyer/profile' component={BuyerProfile}/>
            <Route  path='/farmer/profile' component={FarmerProfile}/>

            <Route  path='/farmer/editprofile' component={FarmerEditProfile}/>

            <Route  path='/buyer/home' component={BuyerHome}/>
            <Route  path='/farmer/home' component={FarmerHome}/>

            <Route  path='/farmer/order' component={FarmerOrder}/>

            <Route  path='/farmer/createorder' component={FarmerCreateOrder}/>
            <Route  path='/buyer/createorder' component={BuyerCreateOrder}/>

            <Route  path='/farmer/updateorder' component={UpdateFarmerOrder}/>
            
            <Route  path='/farmer/agreeorder' component={FarmerAgreeOrder}/>


            
            <Route  path='/farmer/notification' component={FarmerNotification}/>
           
            <Route  path='/farmer/history' component={FarmerHistory}/>
            <Route  path='/farmer/myhistory' component={FarmerOrderHistory}/>



            <Route  path='/aboutus' component={AboutUs}/>
            <Route  path='/contracts' component={Contract}/>
            <Route  path='/priceboard' component={PriceBoard}/>
            <Route  path='/bids' component={Bidding}/>
            <Route  path='/products' component={Products}/>
            
            <Route  path='/notifications' component={Notifications}/>
            
          </Switch>
        </div>
      </div>
      </Router>
    
  );
}

export default App;
