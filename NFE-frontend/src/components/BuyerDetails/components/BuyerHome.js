import React, { useState, useEffect } from "react";

import { getBuyerHome } from '../services/buyerService';

const BuyerHome = () => {
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

    return (
        <div className="container">
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
                        </li>
                    )}
            </ul>
        </div>
    );
}

export default BuyerHome;