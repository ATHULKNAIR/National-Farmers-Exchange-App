import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from 'react-router-dom'


import Form from "react-validation/build/form";


import { rejectFarmerBid } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const BuyerRejectBid = ({ match, history }) => {
    const dispatch = useDispatch()

    const id = match.params.id;

    const form = useRef();

    const [successful, setSuccessful] = useState(false);
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        
            rejectFarmerBid(id)
                .then(() => {
                    setSuccessful(true);
                    history.push('/buyer/order');
                    window.location.href.reload();

                })
                .catch(() => {
                    setSuccessful(false);
                    
                });
        
        if (successful) {
            return <Redirect to="/buyer/home" />
        } else {
            return <Redirect to="/buyer/home" />
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
                        <button className="btn btn-primary btn-block"> Reject Bid </button>
                    </div>
                </Form>
                <div className="row">
                    <Link to={`/buyer/order`}>Cancel Order</Link>
                </div>
            </div>

        </div >
    );
}

export default BuyerRejectBid;