import React, { useState, useEffect } from "react";
import "../css/custom.css";
import "../css/iofrm-style.css";
import "../../form/header.css";
import Header from "../header";
import Footer from "../Footer";
import { baseUrl, ImageView } from "../../../functions/constant";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sunset from '../../../assets/images/sunset.jpg';
// import axios from "axios";

const SingleBlog = () => {
    let MAX_LENGTH = 150;
    const { id } = useParams();
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [Upstate , setUpstate] = useState(0)
    console.log(id, 'singleid')
    const getSingleBlog = async () => {
        const api = `${baseUrl}/blogs/get/singleBlog/${id}`;
        console.log(id)
        await axios.get(api).then((res) => {
            console.log(res, 'singleBlog');
            if (res) {
                setText(res.data.data[0].contentText);
                setTitle(res.data.data[0].title);
                setImage(res.data.data[0].contentImage);
                setDate(res.data.data[0].createdAt);



            }
        })
    }
    // Related Blogs
    const [blog, setBlog] = useState([])


    const getBlog = async (idblog) => {
        console.log(idblog);
        const api = `${baseUrl}/blogs/get/allBlogs`;
        await axios.get(api).then((res) => {
            console.log(res.data);
            if (res.data) {
                setBlog(res.data.data)
                console.log(blog, 'data')
            }
        })
    }

    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scroll({
            top : 0,
            left :0,
            behavior :"instant"
        });

        getBlog()
        getSingleBlog();

    }, [0 ,Upstate])


    return (
        <>
            <div className="overflow-hidden">
                <Header />

                <div className="blog-container">
                    <div className="full-blog-content row">
                        <div className="blog-title text-capitalize d-block  d-md-none d-lg-none">{title}</div>
                        <div className="blog-preview-image col-md-6 col-12">
                            {/* <img src={`${baseUrl}/blogs/getimage/${image}`} /> */}
                            <img src={`${ImageView}${image}`} />
                        </div>
                        <div className="blog-preview-image col-md-6 col-12">
                            {/* <div className="id" hidden>{id}</div> */}
                            <div className="blog-title text-capitalize d-none d-md-block d-lg-block">{title}</div>
                            {
                                (text).length > MAX_LENGTH ?
                                    <div className="blog-content-description">
                                        <i>Description: {`${text.substring(0, MAX_LENGTH)}...`} </i>
                                    </div>
                                    :
                                    <div className="blog-content-description"><i>Description:<div dangerouslySetInnerHTML={{ __html: text }}
                                    ></div></i>
                                    </div>
                            }
                            <div className="blog-preview-date">
                                <div><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(date).toDateString()}</div>
                            </div>
                        </div>
                        <p className="blog-preview-content-text"> <div dangerouslySetInnerHTML={{ __html: text }}
                        ></div></p>
                    </div>
                    <div className="row m-0 p-0 ">
                        <div className="for-center flex-row justify-content-center align-items-center">

                            <div className="col-md-12">
                                <div className="container-heading-related-blog">
                                    <span>RELATED BLOGS</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="service">
                        <div className="row m-2 p-0">
                            {

                                blog?.slice(0 ,6).map((data, key) => {
                                    return (
                                        <div className="col-md-4 about-tabs" style={{ marginTop: '2%' }}>


                                            <div className="main-blog-container">
                                                <div className="blog-image">
                                                    {/* <img src={`${baseUrl}/blogs/getimage/${data.contentImage}`} alt="img" /> */}
                                                    <img src={`${ImageView}${data.contentImage}`} alt="img" />
                                                </div>

                                                <div className="blog-card-headings">

                                                    <div>{data.title}</div>

                                                </div>
                                                <div className="blog-card-date"><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(data.createdAt).toDateString()}</div>
                                                <div className="blog-content-text">
                                                    {
                                                        (data.contentText).length > MAX_LENGTH ?
                                                            <div dangerouslySetInnerHTML={{ __html: data.contentText.substring(0, MAX_LENGTH) }}>
                                                                {/* {`${data.contentText.substring(0 , MAX_LENGTH)}...`} */}
                                                            </div>
                                                            :
                                                            //             <div dangerouslySetInnerHTML={{ __html: text }}
                                                            // ></div>
                                                            <div dangerouslySetInnerHTML={{ __html: data.contentText }}></div>
                                                    }
                                                    <Link to={`/blogs/SingleBlog/${data._id}`} onClick={() => {getBlog(data._id); setUpstate(Upstate + 1)} }>Read more</Link>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default SingleBlog;