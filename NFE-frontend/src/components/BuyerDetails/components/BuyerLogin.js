import React,{useState,useRef} from 'react';
import {Redirect} from 'react-router-dom';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import {useDispatch,useSelector} from 'react-redux';
import {buyerLogin} from '../actions/auth';

import '../../Header/Header.css';
import farm from '../../images/f-logo.jpg';
import industry from '../../images/i-logo.jpg';
import  {FaPhoneSquareAlt} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';




const required = (value)=>{
    if(!value){
        return (
            <div className='alert alert-danger' role='alert'>
                This field is required..!
            </div>
        )
    }
};

const BuyerLogin = (props)=>{
    const form = useRef();
    const checkBtn = useRef();
    
    const [phoneNo ,setPhone] = useState('');
    const [password ,setPassword] = useState('');
    const [loading ,setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state=>state.auth);
    const {message} = useSelector(state=>state.message);

    const dispatch = useDispatch();

    const onChangePhone = (e)=>{
        const phoneNo = e.target.value;
        setPhone(phoneNo);
    }

    const onChangePassword = (e)=>{
        const password = e.target.value;
        setPassword(password);
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        setLoading(true);

        form.current.validateAll();

        if(checkBtn.current.context._errors.length === 0){
            dispatch(buyerLogin(phoneNo,password))
              .then(()=>{
                  props.history.push('/buyer/profile');
                  window.location.href.reload();
              })
              .catch(()=>{
                  setLoading(false);
              });
        }else{
            setLoading(false);
        }
    };

    if(isLoggedIn){
        return <Redirect to="/buyer/profile" />;
    }

    return (
        <div>
            <header className="head">
        <img src={farm} className="farm" alt="farm" />
        <div className="title">
            <h1>NFE</h1>

            <p>National Farmer's Market</p>
        </div>
        <img src={industry} className="industry" alt="industry" />
        </header>
        <div className='col-md-12'>
            <div className='card card-container'>
                <img src="https://res.cloudinary.com/mycartdb/image/upload/v1621406053/buyer_nc5qk6.jpg"
                     alt="profile-image"
                     className="profile-img-card" />
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor="name"><FaPhoneSquareAlt/></label>
                        <Input type="text" className="form-control" name="phoneNo" value={phoneNo} placeholder="Mobile Number" 
                               onChange={onChangePhone} validations={[required]} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><RiLockPasswordFill/></label>
                        <Input type="password" className="form-control" name="password"
                               value={password} onChange={onChangePassword} validations={[required]} />
                    </div>
                    
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                            <span>Login</span>
                        </button>
                    
  
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                               {message}
                            </div>
                        </div>
                    )}
                    <div>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </div>
                    
                </Form>
                <br/>
                <p>New Customer? <a href="/buyer/register">Register</a></p>
            </div>
            
        </div>
        </div>
        
    );
};

export default BuyerLogin;