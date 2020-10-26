import { Link , useHistory} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import  {getBasketTotal}  from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    

    useEffect(() => {
        // generate a special stripe secret that charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket]);

    console.log('the secret is >>> ', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
       // history.replace('/orders')

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }

    

    const handleChange = event => {
        // listen for changes in the card element
        // and display any error as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to = "/checkout">
                            {basket?.length} items
                        </Link>
                    )
                </h1>
                {/* delivery address*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Road 4, Block D</p>
                        <p>Bashundhara RA, Dhaka</p>
                    </div>
                </div>

                {/* review items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items & delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map( item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment method*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Title</h3>
                    </div>
                    <div className='payment__details'>
                            {/* Stripe magic */}
                            <form onClick={handleSubmit}>
                                <CardElement onChange = {handleChange} />
                                <div className='payment__pricecontainer'>
                                    <CurrencyFormat
                                            renderText={(value) => (
                                                <h3>Order Total: {value}</h3>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                {/*Error*/}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment
