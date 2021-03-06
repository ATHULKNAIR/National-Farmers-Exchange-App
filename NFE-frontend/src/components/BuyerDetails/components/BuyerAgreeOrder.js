import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link,Redirect } from 'react-router-dom'

import Form from "react-validation/build/form";


import { agreeFarmerOrder } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const BuyerAgreeOrder = ({match,history}) => {
    const dispatch = useDispatch()
    const id = match.params.id;

    
  const form = useRef();

    const [successful, setSuccessful] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessful(false);
            agreeFarmerOrder(id)
                .then(() => {
                    setSuccessful(true);
                    history.push('/buyer/notification');
                    window.location.href.reload();

                })
                .catch(() => {
                    setSuccessful(false);
                });
        
        if (successful) {
            return <Redirect to="/buyer/notification" />
        }else {
            return <Redirect to="/farmer/home" />
        }
    }
    const BLogOut = () => {
        dispatch(buyerLogout());
    }

    return (
        <div className="container">
            <Header route={'/buyer/login'} LogOut={BLogOut} />
            <div>
                <Form onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Agree Order</button>
                    </div>
                </Form>
                <div className="row">
                    <Link to={`/buyer/home`}>Cancel Order</Link>
                </div>
            </div>

        </div >
    );
}

export default BuyerAgreeOrder;