import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { editFarmerProfile } from '../services/farmerService';
import {farmerLogout} from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';


const FarmerEditProfile = (props) => {
  const dispatch = useDispatch()

  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name)
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
      editFarmerProfile(name, phoneNo, location, product)
        .then(() => {
          setSuccessful(true);
          props.history.push('/farmer/profile');
          window.location.href.reload();
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
    if (successful) {
      return <Redirect to="farmer/profile" />
    }

  }
  const FLogOut = () => {
    dispatch(farmerLogout());
  }

  return (
    <div >
      
          <Header route={'/farmer/login'} LogOut={FLogOut} />
           
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

export default FarmerEditProfile;