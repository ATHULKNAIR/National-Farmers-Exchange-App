import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from 'react-router-dom'

import Form from "react-validation/build/form";


import { bidBuyerOrder } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const FarmerBidOrder = ({ match, history }) => {
    const dispatch = useDispatch()

    const id = match.params.id;

    const form = useRef();

    const [successful, setSuccessful] = useState(false);
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        
            bidBuyerOrder(id)
                .then(() => {
                    setSuccessful(true);
                    history.push('/farmer/notification');
                    window.location.href.reload();

                })
                .catch(() => {
                    setSuccessful(false);
                    
                });
        
        if (successful) {
            return <Redirect to="/farmer/notification" />
        } else {
            return <Redirect to="/farmer/home" />
        }

    }
    const FLogOut = () => {
        dispatch(farmerLogout());
    }

    return (
        <div className="container">
            <Header route={'/farmer/login'} LogOut={FLogOut} />
            <div>
                <Form onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Bid Order</button>
                    </div>
                </Form>
                <div className="row">
                    <Link to={`/farmer/home`}>Cancel Order</Link>
                </div>
            </div>

        </div >
    );
}

export default FarmerBidOrder;