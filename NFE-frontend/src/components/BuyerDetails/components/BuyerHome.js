import React, { useState, useEffect } from "react";

import { getBuyerHome } from '../services/buyerService';
import { useDispatch } from "react-redux";

import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';
import { Link } from "react-router-dom";

const BuyerHome = () => {
    const dispatch = useDispatch()

    const [farmerOrder, setFarmerOrder] = useState("");
    useEffect(() => {
        getBuyerHome().then(
            (response) => {
                const farmerOrder = response.data
                setFarmerOrder(farmerOrder);
                console.log(farmerOrder[0].createdBy.photo)
            },
            (error) => {
                const _order =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setFarmerOrder(_order);
            }
        );
    }, []);
    const BLogOut = () => {
        dispatch(buyerLogout());
    }

    return (
        <div className="container">
            <Header route={'/buyer/login'} LogOut={BLogOut} />

            <ul>

                {farmerOrder &&
                    farmerOrder.map((orders, index) =>
                        <li key={index}>
                            <img src={orders.createdBy.photo} className="profile-img-card" />
                            <br />Posted On : {orders.postedDate}
                            <br />Product :{orders.product}
                            <br /> quantity :{orders.quantity}Kg
                            <br /> Base Price : {orders.baseRate}Rs/Kg
                            <br />boughtBy :{orders.boughtBy}
                            <br />Due Date : {orders.dueDate}
                            <br />Name:{orders.createdBy.name}
                            <br />Location:{orders.createdBy.location}
                            <br />Gender:{orders.createdBy.gender}
                            <div className="row">
                                <Link to={`/buyer/agreeorder`}>Agree Order</Link>
                            </div>
                        </li>
                    )}
            </ul>
        </div>
    );
}

export default BuyerHome;