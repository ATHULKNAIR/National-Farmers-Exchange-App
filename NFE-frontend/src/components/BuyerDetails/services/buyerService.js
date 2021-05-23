import axios from 'axios';
import buyerAuthHeader from './buyerAuthHeader';

const getBuyerProfile = () =>{
    return axios.get('http://localhost:5000/buyer/profile',{
        headers:buyerAuthHeader()
    });
}
const editBuyerProfile = (photo, name,email, phoneNo,location,product)=>{
    return axios.patch('http://localhost:5000/buyer/editprofile',{
        photo, name, email,phoneNo,location,product
    },{headers:buyerAuthHeader()})
};
const getBuyerHome = ()=>{
    return axios.get('http://localhost:5000/buyer/home',{
        headers : buyerAuthHeader()
    });
}
const createBuyerOrder = (product,quantity,baseRate,dueDate) =>{
    return axios.post('http://localhost:5000/buyer/order',{
        product,quantity,baseRate,dueDate
    },{headers : buyerAuthHeader()});
}
const getBuyerOrder = () => {
    return axios.get('http://localhost:5000/buyer/order', {
        headers: buyerAuthHeader()
    });
}
const updateBuyerOrder = (id,product, quantity, baseRate, dueDate) => {
    return axios.patch(`http://localhost:5000/buyer/order/${id}`, {
        product, quantity, baseRate, dueDate
    }, { headers: buyerAuthHeader() });
}
const agreeFarmerOrder = (id) => {
    return axios.put(`http://localhost:5000/buyer/order/${id}`,{}, {
        headers: buyerAuthHeader()
    });
}
const getNotification = () => {
    return axios.get('http://localhost:5000/buyer/notification', {
        headers: buyerAuthHeader()
    });
}
const getMyOrderHistory = () => {
    return axios.get('http://localhost:5000/buyer/myhistory', {
        headers: buyerAuthHeader()
    });
}
const getFarmerOrderHistory = () => {
    return axios.get('http://localhost:5000/buyer/history', {
        headers: buyerAuthHeader()
    });
}
const rejectFarmerBid =(id)=>{
    return axios.get(`http://localhost:5000/buyer/order/${id}`,{
        headers:buyerAuthHeader()
    });
}
const acceptFarmerBid = (id)=>{
    return axios.post(`http://localhost:5000/buyer/order/${id}`,{},{
        headers:buyerAuthHeader()
    });
}

export  {
    getBuyerProfile,
    editBuyerProfile,
    getBuyerHome,
    createBuyerOrder,
    getBuyerOrder,
    updateBuyerOrder,
    agreeFarmerOrder,
    rejectFarmerBid,
    acceptFarmerBid,
    getNotification,
    getMyOrderHistory,
    getFarmerOrderHistory

};