import axios from 'axios';

class AuthService {
    login(phoneNo , password){
        return axios.post('http://localhost:5000/farmer/login',{
            phoneNo,password
        })
        .then(res=>{
            if(res.data.accessToken){
                localStorage.setItem("farmer",JSON.stringify(res.data))
            }
            return res.data;
        });
    }
    logout(){
       window.localStorage.removeItem("farmer");
    }
    register(name,phoneNo,password,location,gender,product){
        return axios.post('http://localhost:5000/farmer/register',{
            name,phoneNo,password,location,gender,product
        });
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("farmer"));
    }
}

export default new AuthService();