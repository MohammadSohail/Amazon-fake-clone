import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/gc/UKBGC/Deals/PD_2020/New/XCM_Manual_1272846_uk_giftcard_bgc_uk_pd_1300x90_c5355ff5-8593-4fb3-a566-82e1986c029b._CB403572767_.jpg" alt="" 
                />
                <div>
                    <h3>Hello, {!user ?  'Guest' : user.email}</h3>
                    {/*some i may get error if i directly call "user.email". instead of that, we can do this "user?.email" or that written on the last line */}
                     <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* checkout product */}
                        {basket.map(item => (
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                        ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
