import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.scss"
import Product from "../product/Product"
import sm1 from "../../pics/smartphone.png"
import lp1 from "../../pics/laptop.png"
import ar1 from "../../pics/airpods.png"
import ds1 from "../../pics/desktop.png"

const data = [
  {
   image: require('../../pics/welcome.jpg')
  },
  {
   image:require('../../pics/login.jpg')
  },
  {
   image:require('../../pics/cart.jpg')
  },
  {
   image:require('../../pics/buy.jpg')
  } 
]

function Home() {
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='home'>
      <div className="intro-container">
        <div className="intro">
          <div class="intro-item ii1"></div>
          <div class="intro-item ii2"></div>
          <div class="intro-item ii3">
            <h2>Available in 140+ countries</h2>
            <p>We do our best to provide affordable shipping in as many countries as possible. Order goods nearly anywhere from the planet.</p>
          </div>
          <div class="intro-item ii4">4</div>
          <div class="intro-item ii5">
            <div className="background"></div>
            <h2>Scroll down to see all</h2>
          </div>
          <div class="intro-item ii6">6</div>
        </div>
      </div>
      <div className="trending-container">          
        <div className="title">
          <h1>Explore Top Trending products</h1>
        </div>
        <div className="home-row">
          <Product 
            id="100000"
            title="Samsung A50"
            description="Announced Feb 2019. Features 6.4″ display, Exynos 9610 chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM."
            image={sm1}
            price={129.99}
            rating={5}
            wid="22vw"
          />
          <Product 
            id="100001"
            title="HP Chromebook"
            description="Chrome OS. Intel Pentium Silver, UHD Graphics4 GB memory, diagonal HD touch display"
            image={lp1}
            price={269.99}
            rating={4}
            wid="22vw"
          />
          <Product 
            id="100002"
            title="Airpods"
            description="Earbuds. They were first announced on September 7, 2016, alongside with iPhone 7"
            image={ar1}
            price={129.99}
            rating={5}
            wid="22vw"
          />
          <Product 
            id="100002"
            title="Dell XPS 9840"
            description="All in one computer. Windows 11 Home, 32gb RAM, 1048gb SSD, Intel i7 12th gen. Free Delivery."
            image={ds1}
            price={1549.99}
            rating={5}
            wid="22vw"
          />
        </div>
      </div>
      <div className="info-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item>        
                <img
                  src={slide.image}
                  alt="slider image"
                />
              </Carousel.Item>  
            )
          })}
        </Carousel>
        <div className="side-box">

        </div>
      </div>
    </div>
  )
}

export default Home
