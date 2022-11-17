import React , {useState , useEffect} from "react";
import "../css/custom.css";
import "../css/iofrm-style.css";
import "../../form/header.css";
import Header from "../header";
import Footer from "../Footer";
import { baseUrl } from "../../../functions/constant";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";

const SingleBlog = () => {
    const {id} = useParams();
    const [text , setText] = useState('')
    const [image , setImage] = useState('')
    const [title , setTitle] = useState('')
    const [date , setDate] = useState('')
    // const [id , setID] = useState()
    console.log(id  , 'singleid')
    const getSingleBlog = async() => {
        const api = `${baseUrl}/blogs/get/singleBlog/${id}`;
        console.log(id)
        await axios.get(api).then((res) => {
            console.log(res , 'singleBlog');
            if(res){
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


    return(
        <>
        <Header/>
        <div className="blog-container">
            {/* <!-- <div className="blog-title">
                <div><?php echo $value['title'] ?></div>
            </div> --> */}
            <div className="full-blog-content row">

                <div className="blog-preview-image col-md-6 col-12">
                    <img src={`${baseUrl}/blogs/getimage/${image}`} />
                </div>
                <div className="blog-preview-image col-md-6 col-12">
                    {/* <div className="id" hidden>{id}</div> */}
                    <div className="blog-title">{title}</div>
                    <div className="blog-content-description"><b>Description: {text}</b>
                        
                    </div>
                    <div className="blog-preview-date">
                        <div><FontAwesomeIcon icon="fas fa-calendar-days"></FontAwesomeIcon>&nbsp;&nbsp;{new Date(date).toDateString()}</div>
                    </div>
                </div>
                <p className="blog-preview-content-text">{text}</p>
            </div>
        </div>
        <Footer/>
          
        </>
    )
}

export default SingleBlog;