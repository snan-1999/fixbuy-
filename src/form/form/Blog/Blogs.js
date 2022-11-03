import React, { useEffect, useState } from "react";
import "../css/custom.css";
import "../css/iofrm-style.css";
import "../../form/header.css";
import logo from '../../../assets/images/logo.png';
import facebook from '../../../assets/images/facebook.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header";
import Footer from "../Footer";
import { baseUrl } from "../../../functions/constant";
import axios from "axios";

const Blogs = () => {

    const [blog , setBlog] = useState([])


    const getBlog = async(idblog) => {
        console.log(idblog);
        const api = `${baseUrl}/blogs/get/allBlogs`;
        await axios.get(api).then((res) => {
            console.log(res.data);
            if(res.data){
                setBlog(res.data.data)
                console.log(blog , 'data')


            }
        })
    }

    useEffect(() => {

        getBlog();

    }, [0])

    return (

      <>
      <Header/>

       <div class="container faq-container">
        <div class="about-text" style={{marginBottom : '-5%'}}>


            <div class="blog-heading">
                {/* <img src={facebook} alt="img" /> */}
                <div>BLOGS</div>
            </div>
                   </div>
            <div class="service">
                <div class="row m-2 p-0">
                   {
                       
                       blog?.map((data , key) => {
                           return(
                               <div class="col-md-4 about-tabs" style={{marginTop :'2%'}}>
                   

                        <div class="main-blog-container">
                            <div class="blog-image">
                                <img src={`${baseUrl}/blogs/getimage/${data.contentImage}`} alt="img" />
                            </div>
                            <div class="blog-card-headings">
                            <div>{data.title}</div>
                            </div>
                            <div class="blog-card-date"><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(data.createdAt).toDateString()}</div>
                            <div class="blog-content-text">
                                {data.contentText}
                                <Link to={`/blogs/SingleBlog/${data._id}`} onClick={() => getBlog(data._id)}>Read more</Link>
                            </div>
                        </div>
                    </div>
                    
                    )})
                }
                </div>
                   </div>
                   </div>
                   <Footer/>
      
                   </>
    )
}

export default Blogs;