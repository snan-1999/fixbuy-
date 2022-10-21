import { baseUrl } from "./constant";
import axios from "axios";


export const VerifyOtp = async (otp, phone) => {
    console.log("started verify")
    let body = {    
        phone: `${phone}`,
        otp: otp
    };

    return await axios
        .post(`${baseUrl}/users/otp/verify`, body)
        .then(
            res => {

                console.log(res.data);
                if (res.data.status) {
                    return { status: res.data };
                }
                else {
                    return { status: res.data.status, message: res.data.message };
                }
            },
            err => {
                console.log(err.response.data);
                return {
                    message: err.response.data.error,
                    status: err.response.data.status,
                };
            },
        )
        .catch(
            err => {
                console.log(err);
            }
        )
}