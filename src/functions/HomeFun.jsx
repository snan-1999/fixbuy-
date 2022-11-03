import { baseUrl } from "./constant"
import axios from 'axios';

export const HomeAllData = async () => {
    try {
        const api = `${baseUrl}/product/fetch/allAds/28.6126687/77.37787`
        const data = await axios.get(api);
        return data
    } catch (error) {
        return error.message
    }
}