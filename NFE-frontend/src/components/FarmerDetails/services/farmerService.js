import axios from 'axios';
import farmerAuthHeader from './farmerAuthHeader';

const getFarmerProfile = ()=>{
    return axios.get('http://localhost:5000/farmer/profile',{
        headers: farmerAuthHeader()
    });
}

const getFarmerHome = ()=>{
    return axios.get('http://localhost:5000/farmer/home',{
        headers : farmerAuthHeader()
    });
}
const createFarmerOrder = (product,quantity,baseRate,dueDate) =>{
    return axios.post('http://localhost:5000/farmer/order',{
        product,quantity,baseRate,dueDate
    },{headers : farmerAuthHeader()});
}

export  {getFarmerProfile,getFarmerHome,createFarmerOrder};