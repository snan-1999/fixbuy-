
import React from 'react'
import { AiFillCopy } from 'react-icons/ai'

import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TelegramIcon,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WorkplaceShareButton,
    TwitterIcon,
    EmailIcon,
    LinkedinIcon
} from "react-share";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
export default function ShareLink({ ShareLinkParam }) {
    const shareUrl = '';
    // 'http://localhost:3000/singleproductpage'
    const titl = 'GitHub';
    console.log(ShareLinkParam, 'link')
    const ShareProducts = () => {
        const CpyText = navigator.clipboard.writeText(window.location.href);
        if (CpyText) {
            toast('Link Copy', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                type: 'success'
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <ShareDiv>

                <div className="Demo__some-network" >
                    <FacebookShareButton 
                        style={{ all: 'unset' }}
                        // url={window.location.href}
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button ms-1 me-1"
                    >
                        <FaFacebook size={20} round style={{color : '#3b5998'}}/>
                    </FacebookShareButton>
                    <WhatsappShareButton
                        style={{ all: 'unset' }}
                        // url={window.location.href}
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button me-1"
                    >
                        <IoLogoWhatsapp size={20} round style={{color : '#4BCA59'}}/>
                    </WhatsappShareButton>
                    {/* <TwitterShareButton
                        url={ShareLinkParam}
                        title={titl}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={20} round />
                    </TwitterShareButton> */}
                    <div className="copy" onClick={ShareProducts}>
                        <abbr title='Copy Link'> <AiFillCopy style={{color : '#436E8B'}}/></abbr>
                    </div>
                    {/* <EmailShareButton
                        url={ShareLinkParam}
                        subject={titl}
                        body="body"
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={20} round />
                    </EmailShareButton>
                    <LinkedinShareButton
                        url={ShareLinkParam}
                        subject={titl}
                        body="body"
                        className="Demo__some-network__share-button">
                        <LinkedinIcon size={20} round />
                    </LinkedinShareButton>
                    <TelegramShareButton
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button"
                    >
                        <TelegramIcon size={20} round />
                    </TelegramShareButton> */}

                </div>
            </ShareDiv>
        </>
    )
}
const ShareDiv = styled.div`
    .Demo__some-network {
       
        cursor: pointer;
    /* color : ${props => props.theme.colors.primary}; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }
    .Demo__some-network button svg{
        /* width: 10vw; */
    }
    .copy {
    font-size: 1.3rem;
    margin-left: 4px;
    }
`
