import React, { useEffect, useState } from 'react'
import { GrMail } from 'react-icons/gr'
import PaymentSuccess from './PaymentSuccess'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function RazorpayAppPayment() {
  const { name,contact,pdt_id,user_id,price,days,type} = useParams();
  const [showFunction, setShowFunction] = useState(false)
  const fetchdata = async () => {
    const key = "rzp_test_JhV4AghQnABYIb"
    const { data: { order } } = await axios.post("https://fixebuyofficial.in/payment/checkout", {
      amount: price,
    })
    console.warn(order, "order dadtaa is here")
    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "fixe Buy",
      description: "Test Transaction",
      image: '',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "http://192.168.29.173:4000/payment/payVerify",
      "handler": function (response) {
        varification(response)
        console.log(response, 'razorpay')
        // setShowFunction(true)
      },
      prefill: {
        name: name,
        contact: contact
      },
      notes: {
        address: "Razorpay Corporate Office",
        pdt_id: pdt_id,
        user_id: user_id,
        price:price,
        days:days,
        type:type
      },
      theme: {
        color: "#3399cc"
      }
    };
    console.log(options, 'options')
    const razor = new window.Razorpay(options);
    razor.open();
  }
  useEffect(() => {
    fetchdata()
  }, [])
  const varification = async (data) => {
    try {
      const response = await axios.post("https://fixebuyofficial.in/payment/payVerify", {

        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature
      })
      if(response.data.status === true){
        setShowFunction(true)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <PaymentSuccess showFunction={showFunction} setShowFunction={setShowFunction} />
    </div>

  )
}

export default RazorpayAppPayment