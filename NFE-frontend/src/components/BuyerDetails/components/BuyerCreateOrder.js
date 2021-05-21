import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Redirect} from 'react-router-dom';
import {createBuyerOrder} from '../services/buyerService';

const BuyerCreateOrder =()=>{

    const form = useRef();
    const checkBtn = useRef();

    const [product,setProduct] = useState("");
    const [quantity,setQuantity] = useState("");
    const [baseRate,setBaseRate] = useState("");
    const [dueDate,setDueDate] = useState("");
    const [successful, setSuccessful] = useState(false);


    const onChangeProduct = (e)=>{
        const product = e.target.value;
        setProduct(product)
    }
    const onChangeQuantity = (e)=>{
        const quantity = e.target.value;
        setQuantity(quantity)
    }
    const onChangeBaseRate = (e)=>{
        const baseRate = e.target.value;
        setBaseRate(baseRate)
    }
    const onChangeDueDate = (e)=>{
        const dueDate = e.target.value;
        setDueDate(dueDate)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setSuccessful(false);

        if (checkBtn.current.context._errors.length === 0) {
            createBuyerOrder(product, quantity, baseRate,dueDate)
              .then(() => {
                setSuccessful(true);

              })
              .catch(() => {
                setSuccessful(false);
              });
        }
        if(successful){
            return <Redirect to="farmer/profile"/>
        }

    }
    // useEffect(()=>{
    //     createBuyerOrder().then(
    //         (response)=>{
    //             setContent(response.data);
    //         },
    //         (error)=>{
    //             const _content =(error.response && error.response.data &&
    //                             error.response.data.message) || 
    //                             error.message || error.toString();
    //             setContent(_content);
    //         }
    //     )
    // },[]);
    return (
        <div >
           <Form onSubmit={handleSubmit} ref={form}>
                  {!successful && (
                    <div>
                      <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <Input type="text" className="form-control" name="product" value={product}
                               onChange={onChangeProduct} 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="quantity">Quantity in Kg</label>
                        <Input type="text" className="form-control" name="quantity" value={quantity}
                               onChange={onChangeQuantity} 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="baseRate">Base Price / Kg</label>
                        <Input type="text" className="form-control" name="baseRate"
                               value={baseRate} onChange={onChangeBaseRate} 
                               
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dueDate">Due Date</label>
                        <Input type="text" className="form-control" name="dueDate"
                               value={dueDate} onChange={onChangeDueDate} 
                               
                        />
                      </div>

                      <div className="form-group">
                        <button className="btn btn-primary btn-block">Publish</button>
                      </div>
                    </div>
                  )}

                  {/* {message && (
                    <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                        {message}
                    </div>
                    </div>
                )} */}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
        </div>
    )
}

export default BuyerCreateOrder;