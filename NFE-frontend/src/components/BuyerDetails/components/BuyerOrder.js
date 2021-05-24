import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { getBuyerOrder } from '../services/buyerService';
import { buyerLogout } from '../actions/auth'
import Header from '../../Header/Header';
import '../../Header/Header.css';

import { Card, Button } from 'react-bootstrap';

const BuyerOrder = () => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState("");
    useEffect(() => {
        getBuyerOrder().then(
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
    const BLogOut = () => {
        dispatch(buyerLogout());
    }

    return (
        <div className="container">
            <Header route={'/buyer/login'} LogOut={BLogOut} />

            <br />
            <div className="row">
                <Button href={`/buyer/createorder`}>
                    <button style={{
                        width: '91rem', marginLeft: '30px', height: '40px',
                        backgroundColor: 'lightblue', fontSize: '20px', borderRadius: '20px'
                    }}><strong>Create Order</strong></button></Button>
            </div>
            <div>

                <ul>
                    {order &&
                        order.map((orders, index) =>
                            <li key={index}>

                                {orders?.isActive == true && orders?.isBid == false &&
                                    <Card style={{
                                        backgroundColor: 'rgb(212, 245, 212)', border: 'solid rgb(2, 112, 2) 3px',
                                        margin: '10px 30px', borderRadius: '20px',}} >

                                        <Card.Header style={{ color: "white", background: "darkcyan", padding: '3px', width: '87.5vw' }}
                                            Align='center'>ID : {orders._id}</Card.Header>

                                        <Card.Body style={{ padding: '20px 50px', fontSize: "20px" }}>

                                            <br />Product : <strong>{orders.product}</strong>
                                            <br />Quantity : <strong>{orders.quantity}</strong> Kg
                                            <br />Base Price : <strong>{orders.baseRate}</strong> Rs/Kg
                                            <br />Due Date : <strong>{orders.dueDate}</strong>
                                            <br />Posted On : <strong>{orders.postedDate}</strong>
                                            <br /><br />
                                            
                                            

                                        <Card.Footer className="text-muted" style={{ marginLeft: '0px' }}>
                                        <Button variant="primary" href={`/farmer/updateorder/${orders._id}`}>
                                                 <button style={{ backgroundColor: 'lightgreen', padding: '5px 30px', fontSize: '15px', borderRadius: '20px' }}><h4>Edit Order</h4></button>
                                            </Button>
                                               
                                        </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                }
                                {orders?.isActive == false && orders?.isBid == true &&
                                    <Card style={{
                                        backgroundColor: 'lightyellow', border: 'solid rgb(2, 112, 2) 3px',
                                        margin: '10px 30px', borderRadius: '20px',}} >

                                        <Card.Header style={{ color: "white", background: "darkcyan", padding: '3px', width: '87.5vw' }}
                                            Align='center'>ID : {orders._id}</Card.Header>

                                        <Card.Body style={{ padding: '20px 50px', fontSize: "20px" }}>

                                            <br />Product : <strong>{orders.product}</strong>
                                            <br />Quantity : <strong>{orders.quantity}</strong> Kg
                                            <br />Base Price : <strong>{orders.baseRate}</strong> Rs/Kg
                                            <br />Due Date : <strong>{orders.dueDate}</strong>
                                            <br />Posted On : <strong>{orders.postedDate}</strong>
                                            <br />
                                            <br />Bid By : <strong>{orders.bidBy}</strong>
                                            <br />Bid Amount : <strong>{orders.bidAmount}</strong>
                                            <br />Total Rate / Kg : <strong>Rs. {parseInt(orders.baseRate+orders.bidAmount)} </strong>

                                        <Card.Footer className="text-muted" style={{ marginLeft: '0px' }}>
                                        <div className="row">
                                                        <Button href={`/buyer/rejectbid/${orders._id}`}>Reject Bid</Button>
                                                        <div>
                                                            <Button href={`/buyer/acceptbid/${orders._id}`}>Accept Bid</Button>
                                                        </div>
                                                    </div>
                                               
                                        </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                }

                                {orders?.isActive == false && orders?.isBid == false &&
                                    <Card style={{
                                        backgroundColor: 'rgb(243, 194, 174)', border: 'solid brown 3px',
                                        margin: '10px 30px', borderRadius: '20px',
                                    }} >
                                        <Card.Header style={{ color: "white", background: "brown", padding: '3px', width: '87.5vw' }}
                                            Align='center'
                                        >ID : {orders._id}</Card.Header>

                                        <Card.Body style={{ padding: '20px 50px', fontSize: "20px" }}>

                                            
                                                <div>
                                                    {/* <div  className="profile">
                                             <img src={orders.boughtFrom.photo}/>
                                             </div> */}
                                             Sold To : <strong>{orders.boughtFrom.name}</strong>
                                                    <br />
                                             Contact : <strong>{orders.boughtFrom.phoneNo}</strong>
                                                    <br />
                                             Location : <strong>{orders.boughtFrom.location}</strong>
                                                    <br />
                                             Agreed On : <strong>{orders.agreedDate}</strong>
                                                </div>

                                            
                                            <br />Product : <strong>{orders.product}</strong>
                                            <br /> quantity : <strong>{orders.quantity}</strong> Kg
                                        <br /> Base Price : <strong>{orders.baseRate}</strong> Rs/Kg
                                        <br />Due Date : <strong>{orders.dueDate}</strong>
                                            <br />Posted On : <strong>{orders.postedDate}</strong>


                                        </Card.Body>
                                    </Card>}

                            </li>)}

                </ul>


            </div>


        </div >
    );
}

export default BuyerOrder;