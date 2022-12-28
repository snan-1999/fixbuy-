import { baseUrl } from "./constant"
import axios from 'axios';

export const HomeAllData = async (Longitude, latitude, PageNo, UserId) => {
    try {
        console.log(UserId, 'function')
        let api
        if (UserId == undefined || UserId == null) {
            api = `${baseUrl}/product/fetch/allAds/${latitude}/${Longitude}/${PageNo}`
        } else {
            api = `${baseUrl}/product/fetch/allAds/${latitude}/${Longitude}/${PageNo}?user_id=${UserId}`
        }
        const data = await axios.get(api);
        console.log(api, 'HomeData')
        return data
    } catch (error) {
        return error.message
    }
}

export const SearchHome = async (Longitude, latitude, searchBar, PageNo) => {
    try {
        const api = `${baseUrl}/product/search/allads/${latitude}/${Longitude}/${searchBar}/${PageNo}`
        const data = await axios.get(api)
        console.log(api , 'search')
        console.log(searchBar, 'search')
        return data
    } catch (error) {
        return error.message
    }
}