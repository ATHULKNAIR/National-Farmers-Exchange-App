import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom'

import { getFarmerOrder } from '../services/farmerService';
import { farmerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

import { Card, Button } from 'react-bootstrap';


const FarmerOrder = () => {
    const dispatch = useDispatch()

    const [order, setOrder] = useState("");
    useEffect(() => {
        getFarmerOrder().then(
            (response) => {
                const order = response.data
                setOrder(order);
                console.log(order)
            },
            (error) => {
                const order =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setOrder(order);
            }
        );
    }, []);
    const FLogOut = () => {
        dispatch(farmerLogout());
    }

    return (
        <div >
            <Header route={'/farmer/login'} LogOut={FLogOut} />
                        
            <br />
            <div className="row">
                <Button href={`/farmer/createorder`}>
                    <button style={{
                         marginLeft: '30px', height: '40px',
                        backgroundColor: 'lightblue', fontSize: '20px', borderRadius: '20px'
                    }}><strong>Create Order</strong></button></Button>
            </div>
            <div>
                <ul>
                    {order &&
                        order.map((orders, index) =>
                            <div key={index}>

                                {orders?.isActive == true &&
                                    <div style={{
                                        backgroundColor: 'rgb(212, 245, 212)',
                                        margin: '10px 30px', borderRadius: '20px', padding:'20px'
                                    }} >
                                        <Card.Header style={{ color: "white", background: "darkcyan", padding: '3px' }}
                                            Align='center'
                                        >ID : {orders._id}</Card.Header>

                                        <Card.Body style={{ padding: '20px 50px', fontSize: "20px" }}>

                                            <br />Product : <strong>{orders.product}</strong>
                                            <br /> quantity : <strong>{orders.quantity}</strong> Kg
                                        <br /> Base Price : <strong>{orders.baseRate}</strong> Rs/Kg
                                        <br />Due Date : <strong>{orders.dueDate}</strong>
                                            <br />Posted On : <strong>{orders.postedDate}</strong>
                                            {orders.isActive == false &&
                                                <div>
                                                    Buyer Name : <strong>{orders.boughtBy.name}</strong>
                                                    <br />
                                             Buyer PhoneNumber : <strong>{orders.boughtBy.phoneNo}</strong>
                                                    <br />Agreed On : <strong>{orders.agreedDate}</strong>
                                                </div>
                                            }

                                            {/* <br />isActive :{JSON.stringify(orders.isActive)} */}

                                            <br /><br />

                                            <Card.Footer className="text-muted" style={{ marginLeft: '0px' }}>
                                                {orders.isActive == true &&
                                                    <a href={`/farmer/updateorder/${orders._id}`}>
                                                        <button className="btn btn-primary"
                                                        //  style={{ backgroundColor: 'lightgreen', padding: '5px 30px', fontSize: '15px', borderRadius: '20px' }}
                                                         >Edit Order</button>
                                                    </a>
                                                }
                                            </Card.Footer>

                                        </Card.Body>
                                    </div>}
                                {orders?.isActive == false &&
                                    <div style={{
                                        backgroundColor: '#EBA49F',
                                        margin: '10px 30px', borderRadius: '20px', padding:'20px'
                                    }} >
                                        <Card.Header style={{ color: "white", background: "brown", padding: '3px'  }}
                                            Align='center'
                                        >ID : {orders._id}</Card.Header>

                                        <Card.Body style={{  fontSize: "20px" }}>

                                            {orders.isActive == false &&
                                                <div>
                                                    {/* <div  className="profile">
                                             <img src={orders.boughtBy.photo}/>
                                             </div> */}
                                             Sold To : <strong>{orders.boughtBy.name}</strong>
                                                    <br />
                                             Contact : <strong>{orders.boughtBy.phoneNo}</strong>
                                                    <br />
                                             Location : <strong>{orders.boughtBy.location}</strong>
                                             <br />
                                             Agreed On : <strong>{orders.agreedDate}</strong>
                                                </div>
                                            }
                                            <br />Product : <strong>{orders.product}</strong>
                                            <br /> quantity : <strong>{orders.quantity}</strong> Kg
                                        <br /> Base Price : <strong>{orders.baseRate}</strong> Rs/Kg
                                        <br />Due Date : <strong>{orders.dueDate}</strong>
                                            <br />Posted On : <strong>{orders.postedDate}</strong>

                                            {/* <br />isActive :{JSON.stringify(orders.isActive)} */}

                                        </Card.Body>
                                    </div>}

                            </div>)}

                </ul>

            </div>


        </div >
    );
}

export default FarmerOrder;