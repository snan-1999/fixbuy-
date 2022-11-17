import { baseUrl } from "./constant"
import axios from 'axios'
export const AllDataCategory = async (MainCategory) => {
    const api = `${baseUrl}/product/fetch/${MainCategory}/28.6126687/77.37787/1?user_id=634123e8832860cfb6788fde`
    const Data = await axios.get(api);
    return Data
}