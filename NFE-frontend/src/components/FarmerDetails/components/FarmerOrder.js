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
        <div className="container">
            <Header route={'/farmer/login'} LogOut={FLogOut} />
            <br />
            <div className="row">
                <Button href={`/farmer/createorder`}>
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

                                {orders?.isActive == true &&
                                    <Card style={{
                                        backgroundColor: 'rgb(212, 245, 212)', border: 'solid rgb(2, 112, 2) 3px',
                                        margin: '10px 30px', borderRadius: '20px',
                                    }} >
                                        <Card.Header style={{ color: "white", background: "darkcyan", padding: '3px', width: '87.5vw' }}
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
                                                    <Button variant="primary" href={`/farmer/updateorder/${orders._id}`}>
                                                        <button style={{ backgroundColor: 'lightgreen', padding: '5px 30px', fontSize: '15px', borderRadius: '20px' }}><h4>Edit Order</h4></button>
                                                    </Button>
                                                }
                                            </Card.Footer>

                                        </Card.Body>
                                    </Card>}
                                {orders?.isActive == false &&
                                    <Card style={{
                                        backgroundColor: 'rgb(243, 194, 174)', border: 'solid brown 3px',
                                        margin: '10px 30px', borderRadius: '20px',
                                    }} >
                                        <Card.Header style={{ color: "white", background: "brown", padding: '3px', width: '87.5vw' }}
                                            Align='center'
                                        >ID : {orders._id}</Card.Header>

                                        <Card.Body style={{ padding: '20px 50px', fontSize: "20px" }}>

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
                                    </Card>}

                            </li>)}

                </ul>

            </div>


        </div >
    );
}

export default FarmerOrder;