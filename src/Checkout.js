import React from 'react'
import './Checkout.css'
import Subtitle from './Subtitle'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/Offerpage_1500x3001.jpg' alt=''></img>

                <div>
                    <h2 className='checkout__title'>
                        Your shopping Cart
                        {/* basket */}
                        {/* basket */}
                        {/* basket */}
                        {/* basket */}
                        {/* basket */}
                    </h2>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtitle/>
                {/* <h2>The Sub Total Will go here</h2> */}
            </div>
        </div>
    )
}

export default Checkout



// 1:07:47
