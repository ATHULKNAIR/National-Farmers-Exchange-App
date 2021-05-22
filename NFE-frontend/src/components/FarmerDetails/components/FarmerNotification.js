import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { getNotification } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

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
        <div className="container">
            <Header route={'/farmer/login'} LogOut={FLogOut} />
            <div>

                <strong>Notifications:</strong>
                <ul>

                    {notification &&
                        notification.map((orders, index) =>
                            <li key={index}>
                                Message : {orders.message}
                                <br />{orders.createdAt}
                                <br /><br />

                            </li>)}
                </ul>

            </div>
        </div >
    );
}

export default FarmerNotification;