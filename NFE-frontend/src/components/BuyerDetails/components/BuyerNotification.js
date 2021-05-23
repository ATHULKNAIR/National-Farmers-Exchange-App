import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { getNotification } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

import { Card } from 'react-bootstrap';


const BuyerNotification = () => {
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
    const BLogOut = () => {
        dispatch(buyerLogout());
    }

    return (
        <div className="container" style={{backgroundColor: "rgb(241, 244, 245)"}}>
            <Header route={'/buyer/login'} LogOut={BLogOut} />
            <div>

                
                <ul>

                    {notification &&
                        notification.map((orders, index) =>
                            <li key={index}>
                                  <Card style={{ backgroundColor:'rgb(208, 244, 252)',width: '92rem', height: '8rem', border: 'solid rgb(2, 62, 97) 3px',
                                               margin: '10px 30px', borderRadius: '20px' }}>
                                    <Card.Header  style={{ color: "white", background: "rgb(2, 62, 97)", padding: '3px' ,width:'12.5rem' }} 
                                                  as="h4" text='primary'>{orders.createdAt}</Card.Header>
                                   
                                    <Card.Body style={{ padding: '20px' }}>
                               <h4>{orders.message}</h4> 
                                
                                <br /><br />
                                </Card.Body>
                                </Card>
                            </li>)}
                </ul>

            </div>
        </div >
    );
}

export default BuyerNotification;