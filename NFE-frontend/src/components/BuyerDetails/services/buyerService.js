import axios from 'axios';
import buyerAuthHeader from './buyerAuthHeader';

const getBuyerProfile = () =>{
    return axios.get('http://localhost:5000/buyer/profile',{
        headers:buyerAuthHeader()
    });
}
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

export  {getBuyerProfile,getBuyerHome,createBuyerOrder};