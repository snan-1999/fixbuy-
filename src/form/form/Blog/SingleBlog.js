import React, { useState, useEffect } from "react";
import "../css/custom.css";
import "../css/iofrm-style.css";
import "../../form/header.css";
import Header from "../header";
import Footer from "../Footer";
import { baseUrl } from "../../../functions/constant";
import axios from "axios";
import { useParams } from "react-router-dom";
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
    // const [id , setID] = useState()
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

    useEffect(() => {

        getSingleBlog();

    }, [0])


    return (
        <>
            <div className="overflow-hidden">
                <Header />

                <div className="blog-container"> 
                    {/* <!-- <div className="blog-title">
                <div><?php echo $value['title'] ?></div>
            </div> --> */}
                    <div className="full-blog-content row">

                        <div className="blog-preview-image col-md-6 col-12">
                            {/* <img src={`${baseUrl}/blogs/getimage/${image}`} /> */}
                            <img src={sunset} />
                        </div>
                        <div className="blog-preview-image col-md-6 col-12">
                            {/* <div className="id" hidden>{id}</div> */}
                            <div className="blog-title text-capitalize">{title}</div>
                            {
                                (text).length > MAX_LENGTH ?
                                    <div className="blog-content-description">
                                        <i>Description: {`${text.substring(0, MAX_LENGTH)}...`} </i>
                                    </div>
                                    :
                                    <div className="blog-content-description"><i>Description: {text}</i>
                                    </div>
                            }
                            <div className="blog-preview-date">
                                <div><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(date).toDateString()}</div>
                            </div>
                        </div>
                        <p className="blog-preview-content-text"> <div dangerouslySetInnerHTML={{ __html: text }}
                        ></div></p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default SingleBlog;