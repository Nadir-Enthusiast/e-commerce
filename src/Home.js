import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import Product from "./Product"

const data = [
  {
   image: require('./pics/welcome.jpg')
  },
  {
   image:require('./pics/login.jpg')
  },
  {
   image:require('./pics/cart.jpg')
  },
  {
   image:require('./pics/buy.jpg')
  } 
]

function Home() {
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='home'>
        <div className="home-container">    
            <Carousel style={{height: '500px', width: '900px', margin: '0 auto 25px auto'}} activeIndex={index} onSelect={handleSelect}>
               {data.map((slide, i) => {
                return (
                  <Carousel.Item>        
                    <img
                      className="d-block w-100"
                      src={slide.image}
                      alt="slider image"
                    />
                  </Carousel.Item>
                )
                })}
            </Carousel>
            
            <div className="home-row">
                <Product 
                    id="100000"
                    title="Smartphone 1 type"
                    image="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    price={1299.99}
                    rating={5}
                />
                <Product 
                    id="100001"
                    title="Another Smartphone"
                    image="https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    price={999.99}
                    rating={4}
                />
                {/* two products*/}
            </div>

            <div className="home-row">
                <Product
                    id="100002"
                    title="Sneakers"
                    image="https://images.pexels.com/photos/8454917/pexels-photo-8454917.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    price={24.99}
                    rating={4}
                />
                <Product 
                    id="100003"
                    title="Jacket"
                    image="https://images.pexels.com/photos/7012347/pexels-photo-7012347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    price={28.99}
                    rating={5}
                />
                <Product 
                    id="100004"
                    title="Jeans"
                    image="https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    price={29.99}
                    rating={5}
                />
                {/* 3 products*/}
            </div>

            <div className="home-row">
                <Product 
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