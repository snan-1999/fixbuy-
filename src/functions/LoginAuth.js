import { baseUrl } from "./constant";
import axios from 'axios';

export const googleAuth = async (respon) => {
    // console.log(respon.profileObj.email)
    let data = JSON.parse(respon)
    let body = {
        email: data.profileObj.email,
        name: data.profileObj.name,
        imageUrl: data.profileObj.imageUrl
    };
    console.log(body)
    return  await axios.post(`${baseUrl}/users/auth/login`, body).then(res => {
             return res
        }
        )

        .catch(
            err => {
                console.log(err);
            }
        )
}


export const facebookAuth = async (respon) => {
    // console.log(respon.profileObj.email)
    let data = JSON.parse(respon)
    let body = {
        email: data.profileObj.email,
        name: data.profileObj.name,
        imageUrl: data.profileObj.imageUrl
    };
    console.log(body)
    return  await axios.post(`${baseUrl}/users/auth/login`, body).then(res => {
             return res
        }
        )

        .catch(
            err => {
                console.log(err);
            }
        )
}
