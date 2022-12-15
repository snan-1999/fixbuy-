import React, { useEffect, useState } from "react";
import "../css/custom.css";
import "../css/iofrm-style.css";
import "../../form/header.css";
import '../../form/CopyCss.css';
import logo from '../../../assets/images/logo.png';
import facebook from '../../../assets/images/facebook.png';
import sunset from '../../../assets/images/sunset.jpg';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header";
import Footer from "../Footer";
import { baseUrl } from "../../../functions/constant";
import axios from "axios";

const Blogs = () => {
    let MAX_LENGTH = 60;
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

       <div className="container faq-container">
        <div className="about-text" style={{marginBottom : '-5%'}}>


            <div className="blog-heading">
                {/* <img src={facebook} alt="img" /> */}
                <div className="setBlog">BLOGS</div>
            </div>
                   </div>
            <div className="service">
                <div className="row m-2 p-0">
                   {
                       
                       blog?.map((data , key) => {
                           return(
                               <div className="col-md-4 about-tabs" style={{marginTop :'2%'}}>
                   

                        <div className="main-blog-container">
                            <div className="blog-image">
                                {/* <img src={`${baseUrl}/blogs/getimage/${data.contentImage}`} alt="img" /> */}
                                <img src={sunset} />
                            </div>
                            
                            <div className="blog-card-headings">
                            
                                <div>{data.title}</div>
                            
                            </div>
                            <div className="blog-card-date"><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(data.createdAt).toDateString()}</div>
                            <div className="blog-content-text">
                                {
                                 (data.contentText).length > MAX_LENGTH ?
                                <div>
                                    {`${data.contentText.substring(0 , MAX_LENGTH)}...`}
                                    </div>
                                    :
                                    <div>{data.contentText}</div>
                                }
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