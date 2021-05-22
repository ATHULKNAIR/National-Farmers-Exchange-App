import axios from 'axios';
import farmerAuthHeader from './farmerAuthHeader';

const getFarmerProfile = () => {
    return axios.get('http://localhost:5000/farmer/profile', {
        headers: farmerAuthHeader()
    });
}
const editFarmerProfile = (photo, name, phoneNo,location,product)=>{
    return axios.patch('http://localhost:5000/farmer/editprofile',{
        photo, name, phoneNo,location,product
    },{headers:farmerAuthHeader()})
};

const getFarmerHome = () => {
    return axios.get('http://localhost:5000/farmer/home', {
        headers: farmerAuthHeader()
    });
}
const createFarmerOrder = (product, quantity, baseRate, dueDate) => {
    return axios.post('http://localhost:5000/farmer/order', {
        product, quantity, baseRate, dueDate
    }, { headers: farmerAuthHeader() });
}
const getFarmerOrder = () => {
    return axios.get('http://localhost:5000/farmer/order', {
        headers: farmerAuthHeader()
    });
}
const updateFarmerOrder = (product, quantity, baseRate, dueDate) => {
    return axios.patch('http://localhost:5000/farmer/order/:id', {
        product, quantity, baseRate, dueDate
    }, { headers: farmerAuthHeader() });
}
const agreeBuyerOrder = () => {
    return axios.put('http://localhost:5000/farmer/order/:id', {
        headers: farmerAuthHeader()
    });
}
const bidBuyerOrder = () => {
    return axios.get('http://localhost:5000/farmer/order/:id', {
        headers: farmerAuthHeader()
    });
}
const getNotification = () => {
    return axios.get('http://localhost:5000/farmer/notification', {
        headers: farmerAuthHeader()
    });
}
const getMyOrderHistory = () => {
    return axios.get('http://localhost:5000/farmer/myhistory', {
        headers: farmerAuthHeader()
    });
}
const getBuyerOrderHistory = () => {
    return axios.get('http://localhost:5000/farmer/history', {
        headers: farmerAuthHeader()
    });
}


export {
     getFarmerProfile, 
     getFarmerHome, 
     createFarmerOrder, 
     getFarmerOrder,
     getBuyerOrderHistory,
     getMyOrderHistory,
     getNotification,
     bidBuyerOrder,
     agreeBuyerOrder,
     updateFarmerOrder,
     editFarmerProfile
    };