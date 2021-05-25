import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {farmerRegister} from '../actions/auth';
import './Farmer.css';
import '../../Header/Header.css'
import farm from '../../images/f-logo.jpg';
import industry from '../../images/i-logo.jpg';
import {FaUserAlt} from "react-icons/fa";
import {FaPhoneSquareAlt } from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import {IoLocation} from 'react-icons/io5';
import {FaGenderless} from 'react-icons/fa';
import {FaProductHunt} from 'react-icons/fa'

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validPhoneNo = (value) => {
    if (value.length != 10 ) {
      return (
        <div className="alert alert-danger" role="alert">
          Phone Number should be 10 digits..!
        </div>
      );
    }
  };const validPassword = (value) => {
    if (value.length < 6 ) {
      return (
        <div className="alert alert-danger" role="alert">
          The password too short.
        </div>
      );
    }
  };

  const FarmerRegsiter = () =>{

    const form = useRef();
    const checkBtn = useRef();
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [product, setProduct] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeName = (e)=>{
        const name = e.target.value;
        setName(name);
    };

    const onChangePhoneNo = (e)=>{
        const phoneNo = e.target.value;
        setPhoneNo(phoneNo);
    };
    const onChangePassword = (e)=>{
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeLocation = (e)=>{
        const location = e.target.value;
        setLocation(location);
    };
    const onChangeGender = (e)=>{
        const gender = e.target.value;
        setGender(gender);
    };
    const onChangeProduct = (e)=>{
        const product = e.target.value;
        setProduct(product);
    };

    const handleRegister=(e)=>{
        e.preventDefault();
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(farmerRegister(name, phoneNo, password,location,gender,product))
              .then(() => {
                setSuccessful(true);
              })
              .catch(() => {
                setSuccessful(false);
              });
        }
    };

    return(
       <div>
          <header className="head">
        <img src={farm} className="farm" alt="farm" />
        <div className="title">
            <h1>NFE</h1>

            <p>National Farmer's Market</p>
        </div>
        <img src={industry} className="industry" alt="industry" />
        </header>
          <div className="col-md-12">
            <div className="card card-container register">
                <img src="https://res.cloudinary.com/mycartdb/image/upload/v1621404771/frmr_vrycol.jpg"
                     alt="profile-image" className="profile-img-card" 
                />
                <Form onSubmit={handleRegister} ref={form}>
                  {!successful && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="name"><FaUserAlt/></label>
                        <Input type="text" className="form-control" name="name" value={name}
                               onChange={onChangeName} validations={[required]} placeholder="User Name"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phoneNo"><FaPhoneSquareAlt/></label>
                        <Input type="text" className="form-control" name="phoneNo" value={phoneNo}
                               onChange={onChangePhoneNo} validations={[required, validPhoneNo]} placeholder="Mobile Number"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password"><RiLockPasswordFill/></label>
                        <Input type="password" className="form-control" name="password"
                               value={password} onChange={onChangePassword} 
                               validations={[required, validPassword]} placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="location"><IoLocation/></label>
                        <Input type="location" className="form-control" name="location"
                               value={location} onChange={onChangeLocation} placeholder="Location"
                               
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender"><FaGenderless/></label>
                        <Input type="gender" className="form-control" name="gender"
                               value={gender} onChange={onChangeGender} placeholder="Gender"
                               
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="product"><FaProductHunt/></label>
                        <Input type="product" className="form-control" name="product"
                               value={product} onChange={onChangeProduct} placeholder="Product"
                               
                        />
                      </div>

                      
                        <button className="btn btn-primary btn-block">Sign Up</button>
                      
                    </div>
                  )}

                  {message && (
                    <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                        {message}
                    </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                <p>Already an account? <a href="/farmer/login">Login</a></p>
            </div>
            
        </div>
       </div>
    )
  }

  

 
  export default FarmerRegsiter