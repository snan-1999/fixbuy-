import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
const PaymentSuccess = (props) => {
    return (
        props.showFunction === true ?
            <div style={{ alignItem: "center", backgroundColor: "red", boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px", width: "32vw", height: "fit-content" }}>
                <div style={{    height: "259px",
    width: "25%",
    borderRadius: "32px", position: "fixed", top: "25%", right: "30%", boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px", backgroundColor: "white" }}>
                    {/* <img src={process.env.PUBLIC_URL + "/correct.png"} style={{
                        height: "11vh",
                        width: " 66px",
                        marginLeft: "35%",
                        marginTop: "11%"
                    }} /> */}
                     <BsCheckLg
                        style={{
                            color : 'green',
                            height: "11vh",
                            width: " 66px",
                            marginLeft: "35%",
                            marginTop: "11%"
                        }}
                    />
                    <h5 style={{ color: "green",
    marginTop: "39px ",    marginLeft: "17%"}}>Payment Successfull</h5>
                    <button style={{
                        border: "none",
                        color: "white",
                        width: "7vw",
                        height: "5vh",
                        backgroundColor: "#3f6685",
                        borderRadius: " 11px",
                        marginTop: " 7%",
                        marginLeft: "32%",
                        borderRadius:"31px"
                    }}
                    onClick={() =>props.setShowFunction(false)}>Ok</button>
                </div>
            </div> : null
    )
}
export default PaymentSuccess
