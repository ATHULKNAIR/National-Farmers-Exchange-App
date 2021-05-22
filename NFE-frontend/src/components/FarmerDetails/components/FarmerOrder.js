import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { getFarmerOrder } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const FarmerOrder = () => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState("");
    useEffect(() => {
        getFarmerOrder().then(
            (response) => {
                const order = response.data
                setOrder(order);
                console.log(order)
            },
            (error) => {
                const order =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setOrder(order);
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

                <strong>Order:</strong>
                <ul>

                    {order &&
                        order.map((orders, index) =>
                            <li key={index}>Posted On : {orders.postedDate}
                                <br />Product :{orders.product}
                                <br /> quantity :{orders.quantity}Kg
                                <br /> Base Price : {orders.baseRate}Rs/Kg
                                <br />boughtBy :{orders.boughtBy}
                                <br />isActive :{JSON.stringify(orders.isActive)}
                                <br />Due Date : {orders.dueDate}<br /><br />
                                <div className="row">
                                    <Link to={`/farmer/updateorder`}>Edit Order</Link>
                                </div>
                            </li>)}

                </ul>

            </div>
            <div className="row">
                <Link to={`/farmer/createorder`}>Create Order</Link>
            </div>

        </div >
    );
}

export default FarmerOrder;