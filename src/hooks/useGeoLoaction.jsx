import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useContext } from "react";
import { GlobalVariables } from "../Context/StateProvider";

const useGeoLocation = () => {
    // const [longitude , setLongitude] = useState("");
    // const [] = useState("");
    const { longitude , setLongitude ,latitude , setlatitude} = useContext(GlobalVariables)
    const LocationApi = async() => {
        const api = `https://ipapi.co/json`;
        await axios.get(api).then((res) => {
            if (res.data){
                setLongitude(res.data.longitude);
                setlatitude(res.data.latitude);
                console.log(res.data ,'Location');
            }
        })
    }


    const [location , setLocation] = useState({
        loaded : false,
        coordinates : { lat : "" , lng : ""},
    });

    const onSuccess = location => {
        setlatitude(location.coords.latitude);
        setLongitude(location.coords.longitude)
        // setLocation({
        //     loaded : true ,
        //     coordinates : {
        //         lat : location.coords.latitude,
        //         lng : location.coords.longitude,
        //     }
        // })
    };

    const onError = error => {
        setLocation(
            LocationApi() 
            // coordinates : {},
            // loaded = true,
            // error ,)
            )
    }

    useEffect (() => {
        if ( !("geolocation" in navigator)) {
            onError ({
                code: 0,
                message : "GeoLocation is not supported",
                LocationApi
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess , onError);
    } , []);
    
    return location;
};

export default useGeoLocation;