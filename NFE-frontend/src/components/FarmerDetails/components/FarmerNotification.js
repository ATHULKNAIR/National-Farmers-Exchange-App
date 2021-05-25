import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getNotification } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';
import './Farmer.css'

import { Card } from 'react-bootstrap';
import { RiDivideFill } from "react-icons/ri";

const FarmerNotification = () => {
    const dispatch = useDispatch()
    const [notification, setNotification] = useState("");
    useEffect(() => {
        getNotification().then(
            (response) => {
                const notification = response.data
                setNotification(notification);
                console.log(notification[2])
            },
            (error) => {
                const _notification =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setNotification(_notification);
            }
        );
    }, []);
    const FLogOut = () => {
        dispatch(farmerLogout());
    }

    return (
        <div>
            <Header route={'/farmer/login'} LogOut={FLogOut} />
            <div>


                <ul>
                    {notification &&
                        notification.map((orders, index) =>

                            <div key={index}>
                                <div style={{ 
                                    backgroundColor:'rgb(212, 245, 212)',  
                                               margin: '10px 10px ', borderRadius: '10px',padding:'10px' , height:'120px', display:'flex-wrap' }}>
                                    <Card.Header  style={{ color: "white", background: "darkcyan",  margin:'10px 10px 10px 10px' , width:'15.5rem' }} 
                                                  as="h5" text='primary' > {orders.Date}{orders.time}
                                                  
                                                  </Card.Header>
                                                  
                                    
                                    <div style={{  padding:'10px'}}>
                                        
                                           <h5>{orders.message}</h5> 
                                       
                                    </div>
                                </div>
                            </div>)}

                </ul>

            </div>
        </div >
    );
}

export default FarmerNotification;