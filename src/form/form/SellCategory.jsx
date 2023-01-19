import React from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "./header";
import Footer from "./Footer";

const SellCategory = () => {
    const location = useLocation();
    const [categories, setCategories] = useState(location?.state);
    console.log(location.state, ' data')

    return (
        <>
        <Header/>
        <div style={{marginTop : '12%'}}>

            <ul class="list-group ">
                {
                    categories?.map((value, key) => {
                        return (
                            <Link to={value.to} style={{textDecoration:"none"}}>
                            <li class="list-group-item row text-center">{value.name}</li>
                            </Link>
                        )
                    })

                }
            </ul>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default SellCategory;