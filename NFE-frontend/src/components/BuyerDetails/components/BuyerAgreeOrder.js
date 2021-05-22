import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link,Redirect } from 'react-router-dom'

import Form from "react-validation/build/form";


import { agreeFarmerOrder } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const BuyerAgreeOrder = (props) => {
    const dispatch = useDispatch()

    
  const form = useRef();
  const checkBtn = useRef();

    const [successful, setSuccessful] = useState(false);

    const handleSubmit = () => {

        setSuccessful(false);
        if (checkBtn.current.context._errors.length === 0) {
            agreeFarmerOrder()
                .then(() => {
                    setSuccessful(true);
                    props.history.push('/buyer/notification');
                    window.location.href.reload();

                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
        if (successful) {
            return <Redirect to="/buyer/notification" />
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