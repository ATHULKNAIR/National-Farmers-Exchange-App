import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {updateFarmerOrder } from '../services/farmerService';
import {farmerLogout} from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';


const UpdateFarmerOrder = ({match,history}) => {
  const dispatch = useDispatch()

const id = match.params.id;
  const form = useRef();
  const checkBtn = useRef();

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [baseRate, setBaseRate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);

  const onChangeProduct = (e) => {
    const product = e.target.value;
    setProduct(product)
  }
  const onChangeQuantity = (e) => {
    const quantity = e.target.value;
    setQuantity(quantity)
  }
  const onChangeBaseRate = (e) => {
    const baseRate = e.target.value;
    setBaseRate(baseRate)
  }
  const onChangeDueDate = (e) => {
    const dueDate = e.target.value;
    setDueDate(dueDate)
  }
  
console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);

    if (checkBtn.current.context._errors.length === 0) {
     updateFarmerOrder(id,product, quantity, baseRate, dueDate)
        .then(() => {
          setSuccessful(true);
          history.push('/farmer/order');
          window.location.href.reload();
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
    if (successful) {
      return <Redirect to="/farmer/order" />
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
              <label htmlFor="product">Change Product</label>
              <Input type="text" className="form-control" name="product" value={product}
                onChange={onChangeProduct}
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity"> Change Quantity</label>
              <Input type="text" className="form-control" name="quantity" value={quantity}
                onChange={onChangeQuantity}
              />
            </div>

            <div className="form-group">
              <label htmlFor="baseRate">Change Base Rate</label>
              <Input type="text" className="form-control" name="baseRate"
                value={baseRate} onChange={onChangeBaseRate}

              />
            </div>
            <div className="form-group">
              <label htmlFor="dueDate"> Change DueDate</label>
              <Input type="text" className="form-control" name="dueDate"
                value={dueDate} onChange={onChangeDueDate}

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

export default UpdateFarmerOrder;