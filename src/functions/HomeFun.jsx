import { baseUrl } from "./constant"
import axios from 'axios';

export const HomeAllData = async (Longitude, latitude, Lmore) => {
    try {
        const api = `${baseUrl}/product/fetch/allAds/${latitude}/${Longitude}/${Lmore}`
        const data = await axios.get(api);
        console.log(api)
        return data
    } catch (error) {
        return error.message
    }
}