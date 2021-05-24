import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getNotification } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';
import './Farmer.css'

import { Card } from 'react-bootstrap';

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
        <div className="container" style={{backgroundColor: "rgb(215, 253, 232)"}}>
            <Header route={'/farmer/login'} LogOut={FLogOut} />
            <div>


                <ul>
                    {notification &&
                        notification.map((orders, index) =>

                            <li key={index}>
                                <Card  style={{ backgroundColor:'rgb(212, 245, 212)',width: '92rem', height: '8rem', border: 'solid rgb(2, 112, 2) 3px',
                                               margin: '10px 30px', borderRadius: '20px', }}>
                                    <Card.Header  style={{ color: "white", background: "darkcyan", padding: '3px' ,width:'15.5rem' }} 
                                                  as="h4" text='primary'> {orders.Date}{orders.time}</Card.Header>
                                   
                                    <Card.Body style={{ padding: '20px' }}>
                                        
                                            <h4>{orders.message}</h4> 
                                       
                                    </Card.Body>
                                </Card>
                            </li>)}

                </ul>

            </div>
        </div >
    );
}

export default FarmerNotification;