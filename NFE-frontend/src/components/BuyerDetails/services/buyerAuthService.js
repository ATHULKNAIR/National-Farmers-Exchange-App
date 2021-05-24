import axios from 'axios';

class AuthService {

    login(phoneNo,password){
        return axios.post('http://localhost:5000/buyer/login',{
            phoneNo,password
        })
        .then(res=>{
            if(res.data.accessToken){
                localStorage.setItem("buyer",JSON.stringify(res.data))
            }
            return res.data;
        });
    }

    logout(){
        localStorage.removeItem("buyer");
    }

    register(name,email,password,phoneNo,location,gender,product){
        return axios.post("http://localhost:5000/buyer/register",{
            name,email,password,phoneNo,location,gender,product
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("buyer"));
    }
}

export default new AuthService();