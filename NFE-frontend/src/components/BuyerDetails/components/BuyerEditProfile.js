import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { editBuyerProfile } from '../services/buyerService';
import {buyerLogout} from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';


const BuyerEditProfile = (props) => {
  const dispatch = useDispatch()

  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email)
  }
  const onChangePhoneNo = (e) => {
    const phoneNo = e.target.value;
    setPhoneNo(phoneNo)
  }
  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location)
  }
  const onChangeProduct = (e) => {
    const product = e.target.value;
    setProduct(product)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    if (checkBtn.current.context._errors.length === 0) {
      editBuyerProfile(name, phoneNo, location, product)
        .then(() => {
          setSuccessful(true);
          props.history.push('/buyer/profile');
          window.location.href.reload();
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
    if (successful) {
      return <Redirect to="buyer/profile" />
    }

  }
  const BLogOut = () => {
    dispatch(buyerLogout());
  }

  return (
    <div >
      
          <Header route={'/buyer/login'} LogOut={BLogOut} />
           
            <Form onSubmit={handleSubmit}  ref={form}>
        {!successful && (
          <div>

            <div className="form-group">
              <label htmlFor="name">Change Name</label>
              <Input type="text" className="form-control" name="name" value={name}
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Change Email</label>
              <Input type="text" className="form-control" name="email" value={email}
                onChange={onChangeEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNo"> Change PhoneNumber</label>
              <Input type="text" className="form-control" name="phoneNo" value={phoneNo}
                onChange={onChangePhoneNo}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Chnage Location</label>
              <Input type="text" className="form-control" name="location"
                value={location} onChange={onChangeLocation}

              />
            </div>
            <div className="form-group">
              <label htmlFor="product"> Change Product</label>
              <Input type="text" className="form-control" name="product"
                value={product} onChange={onChangeProduct}

              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">Save Changes</button>
            </div>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  )
}

export default BuyerEditProfile;