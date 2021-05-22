import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link,Redirect } from 'react-router-dom'

import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

import { agreeBuyerOrder } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

const FarmerAgreeOrder = (props) => {
    const dispatch = useDispatch()

    
  const form = useRef();
  const checkBtn = useRef();

    const [successful, setSuccessful] = useState(false);

    const handleSubmit = () => {

        setSuccessful(false);
        if (checkBtn.current.context._errors.length === 0) {
            agreeBuyerOrder()
                .then(() => {
                    setSuccessful(true);
                    props.history.push('/farmer/notification');
                    window.location.href.reload();

                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
        if (successful) {
            return <Redirect to="/farmer/notification" />
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
                        <button className="btn btn-primary btn-block">Agree Order</button>
                    </div>
                </Form>
                <div className="row">
                    <Link to={`/farmer/home`}>Cancel Order</Link>
                </div>
            </div>

        </div >
    );
}

export default FarmerAgreeOrder;