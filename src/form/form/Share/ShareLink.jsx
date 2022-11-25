
import React from 'react'
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
export default function ShareLink({ ShareLinkParam }) {
    const shareUrl = '';
    // 'http://localhost:3000/singleproductpage'
    const titl = 'GitHub';
    console.log(ShareLinkParam, 'link')
    return (
        <>
            <ShareDiv>

                <div className="Demo__some-network">
                    <FacebookShareButton
                        // url={window.location.href}
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={50} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        // url={window.location.href}
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={50} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                        url={ShareLinkParam}
                        title={titl}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={50} round />
                    </TwitterShareButton>
                    <EmailShareButton
                        url={ShareLinkParam}
                        subject={titl}
                        body="body"
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={50} round />
                    </EmailShareButton>
                    <LinkedinShareButton
                        url={ShareLinkParam}
                        subject={titl}
                        body="body"
                        className="Demo__some-network__share-button">
                        <LinkedinIcon size={50} round />
                    </LinkedinShareButton>
                    <TelegramShareButton
                        // url={window.location.href}
                        url={ShareLinkParam}
                        quote={titl}
                        className="Demo__some-network__share-button"
                    >
                        <TelegramIcon size={50} round />
                    </TelegramShareButton>

                </div>
            </ShareDiv>
        </>
    )
}
const ShareDiv = styled.div`
    .Demo__some-network {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
    .Demo__some-network button svg{
        /* width: 10vw; */
    }
`
