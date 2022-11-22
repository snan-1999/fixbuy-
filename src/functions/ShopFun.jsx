import { baseUrl } from "./constant"
import axios from 'axios'
export const ShopProductData = async (latitude, Longitude, PageNo, UserId) => {
    let api;
    if (UserId == undefined || UserId == null) {
        api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${PageNo}`
    } else {
        api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${PageNo}?user_id=${UserId}`

    }
    const data = await axios.get(api);
    console.log(api, "shopData");
    return data
}

//filter 
export const FilterShopData = async (latitude, Longitude, PageNo, filters, UserId) => {
    let api;
    if (UserId == undefined || UserId == null) {
        api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${filters}/${PageNo}`
    }else{
        
        api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${filters}/${PageNo}?user_id=${UserId}`
    }
        const data = await axios.get(api);
        console.log(api)
        return data
    }