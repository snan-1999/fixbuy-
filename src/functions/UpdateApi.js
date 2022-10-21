import { baseUrl } from "./constant";
import axios from "axios";


export const UpdateApi = async (id) => {
        console.log("update started")
    
        return await axios
            .get(`${baseUrl}/users/getprofile/${id}`)
            .then(
                res => {
    
                    console.log(res.data);
                    if (res.data.status) {
                        return { status: res.data };
                    }
                    else {
                        return { status: res.status.data };
                    }
                },
                err => {
                    console.log(err.response.data);
                    return {
                        // message: err.response.data.error,
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
