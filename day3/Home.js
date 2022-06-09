import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
            <img 
                className='home-banner'
                src='https://previews.123rf.com/images/garagestock/garagestock1903/garagestock190302973/119180827-e-commerce-banner-concept.jpg'
                alt=''
            />

            <div className="home-row">
                <Product 
                    key="100000"
                    id="100000"
                    title="Galaxy S22 ultra"
                    image="https://thumbs.dreamstime.com/b/samsung-galaxy-s-ultra-red-rear-view-white-background-242096625.jpg"
                    price={1299.99}
                    rating={5}
                />
                <Product 
                    key="100001"
                    id="100001"
                    title="IPhone 13 Pro"
                    image="https://thumbs.dreamstime.com/b/iphone-pro-black-background-three-close-up-phone-cameras-apple-logo-russia-krasnoyarsk-october-max-232763526.jpg"
                    price={999.99}
                    rating={4}
                />
                {/* two products*/}
            </div>

            <div className="home-row">
                <Product 
                    key="100002"
                    id="100002"
                    title="Sneakers"
                    image="https://thumbs.dreamstime.com/b/vintage-red-shoes-23151148.jpg"
                    price={24.99}
                    rating={4}
                />
                <Product 
                    key="100003"
                    id="100003"
                    title="Jacket"
                    image="https://thumbs.dreamstime.com/b/blue-male-winter-jacket-isolated-white-background-65247609.jpg"
                    price={28.99}
                    rating={5}
                />
                <Product 
                    key="100004"
                    id="100004"
                    title="Jeans"
                    image="https://thumbs.dreamstime.com/b/blue-jeans-isolated-white-34440719.jpg"
                    price={29.99}
                    rating={5}
                />
                {/* 3 products*/}
            </div>

            <div className="home-row">
                <Product 
                    key="100005"
                    id="100005"
                    title="Apple Monitor"
                    image="https://st2.depositphotos.com/2332949/6188/i/450/depositphotos_61882901-stock-photo-mock-up-pc-screen-blue.jpg"
                    price={899.99}
                    rating={5}
                />
                {/* 1 product*/}
            </div>
        </div>
    </div>
  )
}

export default Home
