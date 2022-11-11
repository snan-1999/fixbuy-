import { baseUrl } from "./constant"
import axios from 'axios'
export const ShopProductData = async (latitude, Longitude, PageNo) => {
    const api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${PageNo}`
    const data = await axios.get(api);
    console.log(api , "shopData");
    return data
}

//filter 
export const FilterShopData = async (latitude, Longitude, PageNo, filters) => {
    const api = `${baseUrl}/product/getShop/ads/${latitude}/${Longitude}/${filters}/${PageNo}`
    const data = await axios.get(api);
    console.log(api)
    return data
}