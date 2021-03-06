import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import {getFarmerOrderHistory } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const BuyerHistory = () => {
    const dispatch = useDispatch()
    const [history, setHistory] = useState("");
    useEffect(() => {
getFarmerOrderHistory().then(
            (response) => {
                const history = response.data
                setHistory(history);
                console.log(history[0])
            },
            (error) => {
                const _history =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setHistory(_history);
            }
        );
    }, []);
    const BLogOut = () => {
        dispatch(buyerLogout());
    }

    return (
        <div className="container">
            <Header route={'/buyer/login'} LogOut={BLogOut} />
            <div>

                <strong>History:</strong>
                <ul>

                    {history &&
                        history.map((orders, index) =>
                            <li key={index}>
                                <div>
                <img src={orders.createdBy.photo} alt="Profile Pic"
                     className="profile-img-card"/>
                     
            </div>
                                <br />Order For : {orders.createdBy.name}
                                <br />Contact No :{orders.createdBy.phoneNo}
                                <br />Created At :{orders.postedDate}
                                <br />Product :{orders.product}
                                <br />Quantity in Kg :{orders.quantity}
                                <br />Amount / Kg :{orders.baseRate}
                                <br />Due Date :{orders.dueDate}
                                <br /><br />

                            </li>)}
                </ul>

            </div>
        </div >
    );
}

export default BuyerHistory;