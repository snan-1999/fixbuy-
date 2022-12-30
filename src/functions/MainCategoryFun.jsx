import { baseUrl } from "./constant"
import axios from 'axios'
export const AllDataCategory = async (MainCategory,  latitude, Longitude, PageNO, UserId) => {
    console.log(PageNO)
    let api;
    try {
        if (UserId == undefined || UserId == null) {
             api = `${baseUrl}/product/fetch/${MainCategory}/${latitude}/${Longitude}/${PageNO}`
        } else {
             api = `${baseUrl}/product/fetch/${MainCategory}/${latitude}/${Longitude}/${PageNO}?user_id=${UserId}`

        }
        const Data = await axios.get(api);
        console.log(api, 'main')
        return Data
    } catch (error) {
        return error
    }
}
// filter Main
export const FilterMainCategoryData = async (MainCategory, latitude, Longitude, FIlterPageNO, filters, UserId) => {
    try {
        let api;
        if (UserId == undefined || UserId == null) {
             api = `${baseUrl}/product/fetchFilter/${MainCategory}/${latitude}/${Longitude}/${filters}/${FIlterPageNO}`
        } else {
             api = `${baseUrl}/product/fetchFilter/${MainCategory}/${latitude}/${Longitude}/${filters}/${FIlterPageNO}?user_id=${UserId}`

        }
        const Data = await axios.get(api);
        console.log(api, 'shopData')
        // console.log(Data , 'shopData')
        return Data
    } catch (error) {
        return error
    }
}
// subData
export const SubDataCategoryFun = async (maincategory, GetSubCatogery, latitude, Longitude, PageNO, UserId) => {
    let api;
    try {
        if (UserId == undefined || UserId == null) {
            api = `${baseUrl}/product/fetch/${maincategory}/${GetSubCatogery}/${latitude}/${Longitude}/${PageNO}`
        } else {
            api = `${baseUrl}/product/fetch/${maincategory}/${GetSubCatogery}/${latitude}/${Longitude}/${PageNO}?user_id=${UserId}`
        }
        console.log(api, 'loaddd')
        const data = await axios.get(api);
        return data
    } catch (error) {
        return error
    }
}
// filter sub
export const FilterSubCategoryData = async (MainCategory, GetSubCatogery, latitude, Longitude, FIlterPageNO, filters, UserId) => {
    try {
        let api;
        if (UserId == undefined || UserId == null) {
             api = `${baseUrl}/product/fetchFilter/${MainCategory}/${GetSubCatogery}/${latitude}/${Longitude}/${filters}/${FIlterPageNO}`
        } else {
             api = `${baseUrl}/product/fetchFilter/${MainCategory}/${GetSubCatogery}/${latitude}/${Longitude}/${filters}/${FIlterPageNO}?user_id=${UserId}`
        }
        const Data = await axios.get(api);
        console.log(api, 'location')
        // console.log(Data , 'shopData')
        return Data
    } catch (error) {
        return error
    }
}