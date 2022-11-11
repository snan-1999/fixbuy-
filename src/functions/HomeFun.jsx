import { baseUrl } from "./constant"
import axios from 'axios';

export const HomeAllData = async (Longitude, latitude, Lmore) => {
    try {
        // ?user_id=${}
        const api = `${baseUrl}/product/fetch/allAds/${latitude}/${Longitude}/${Lmore}?user_id=634123e8832860cfb6788fde`
        const data = await axios.get(api);
        console.log(api)
        return data
    } catch (error) {
        return error.message
    }
}

export const SearchHome = async (Longitude, latitude, searchBar, PageNo) => {
    try {
        const api = `${baseUrl}/product/search/allads/${latitude}/${Longitude}/${searchBar}/${PageNo}`
        const data = await axios.get(api)
        console.log(api)
        console.log(searchBar , 'search')
        return data
    } catch (error) {
        return error.message
    }
}