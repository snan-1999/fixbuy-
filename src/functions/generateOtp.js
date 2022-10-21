
import { baseUrl } from "./constant";
import axios from "axios";

export const generateOtp = async (phone , type) => {
    console.log("api function...");
    console.log(`${phone}`);
    let body = {
        phone: `${phone}`,
        submit: type
    }

    return await axios
    .post(`${baseUrl}/users/otp/genrate` , body)
    .then(
        res =>{
            console.log(res.data);
            if(res.data.status){
                return {status : res.data.status}
            }
        },

        err => {
            return{status : err.response.data.status , message : err.response.data.status};
        }
    )
    .catch(err => {
        console.log(err);
    });

};