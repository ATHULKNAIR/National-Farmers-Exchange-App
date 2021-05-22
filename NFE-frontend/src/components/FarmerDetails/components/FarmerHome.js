import React, { useState, useEffect } from "react";

import { getFarmerHome } from '../services/farmerService';
import { useDispatch } from "react-redux";

import {farmerLogout} from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';
import { Link } from "react-router-dom";

const FarmerHome = () => {
  const dispatch = useDispatch()

    const [buyerOrder, setBuyerOrder] = useState("");
    useEffect(() => {
        getFarmerHome().then(
            (response) => {
                const buyerOrder = response.data
                setBuyerOrder(buyerOrder);
                console.log(buyerOrder[0].createdBy.photo)
            },
            (error) => {
                const _order =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setBuyerOrder(_order);
            }
        );
    }, []);
    const FLogOut = () => {
        dispatch(farmerLogout());
      }

    return (
        <div className="container">
          <Header route={'/farmer/login'} LogOut={FLogOut} />

            <ul>

                {buyerOrder &&
                    buyerOrder.map((orders, index) =>
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
                                    <Link to={`/farmer/agreeorder`}>Agree Order</Link>
                            </div>

                        </li>
                    )}


            </ul>





        </div>
    );
}

export default FarmerHome;