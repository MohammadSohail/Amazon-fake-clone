import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className = "home__image"
                    src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR0ju4nWQjkJfS5EUjV_wZjy9ltTp1QgrepjevVQUGl-DcClLf4mQpUM05M" 
                    alt = "" 
                />

                <div className="home__row">
                    <Product 
                        id = "12312341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id = "12312331"
                        title="The Undead. The First Seven Days (The Undead series Book 1)" 
                        price={15.99} 
                        image="https://m.media-amazon.com/images/I/51XQBU4nZcL.jpg"
                        rating={3}
                    />
                    <Product 
                        id = "866565165"
                        title="What a Flanker: The funniest sports biography you’ll read in 2020 " 
                        price={8.19} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41Mz510vwJL._SX323_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product 
                        id = "32318561"
                        title="War Lord: From the Sunday Times bestseller, the epic new historical fiction book for 2020" 
                        price={10.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51TtUi-3w2L._SX324_BO1,204,203,200_.jpg"
                        rating={1}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "789159"
                        title='Willful Smart Watch,1.3" Touch Screen Smartwatch,Fitness Trackers With Heart Rate Monitor,Waterproof IP68 Fitness Tracker Watch Pedometer Stopwatch,Smart Watch for Men Women for iPhone Android Phone'
                        price={36.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51k-5Dh6CmL._AC_SL1000_.jpg"
                        rating={2}
                    />
                    <Product 
                        id = "745125"
                        title="Apple Airpods with Wireless Charging Case" 
                        price={40.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/710rzW2RGcL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product 
                        id = "777123"
                        title="Sony WH-CH510 Wireless Bluetooth Headphones with Mic, 35 Hours Battery Life with Quick Charge, On-ear Style, Hands-Free Call, Voice Assistant - Black" 
                        price={65.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81M4KUrL5DL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                <Product 
                        id = "4572912"
                        title="Samsung U32R591C 32 inch Monitor - 3840 x 2160 Resolution, 4ms Response, HDMI" 
                        price={785.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/910vGeBKz9L._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
