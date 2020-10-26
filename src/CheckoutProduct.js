import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';


function CheckoutProduct({image, id, title, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();
    // basket is for pull info, dispatch is for change info

    const removeFromBasket = () => {

        dispatch( {
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }

    return (
        <FlipMove>
        <div className="checkoutProduct">
            <img className = "checkoutProduct_image" src={image} alt = ""/>

            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>

                <p className = "checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className = "checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><img className="product__ratingImage"src="https://portals.clarity-ventures.com/portals/0/images/product-ratings-ecommerce.png" alt="" /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}

            </div>
        </div>
        </FlipMove>
    )
}

export default CheckoutProduct
