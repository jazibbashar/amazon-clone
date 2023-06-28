import React from 'react'
import "./Home.css"
import Product from './Product'
function Home () {
  return <div className='home'>

      <div className='home__container'>
       <img 
       className='home__image'
       src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'alt=''/>
        
        <div className='home__row'>
        <Product 
         id="12321341"
         title='The lean startup' 
         price={499}
         image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
         rating={5}
         />
          
        <Product
        id="49538094"
        title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage)| True 48 MP Quad Camera | 90Hz Refresh Rate"
        price={10499.0}
        image="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"
        rating={3}
        />
        </div>

        <div className='home__row'>
        
        <Product
        id="5646"
        title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)"
        price={39999.0}
        image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"
        rating={4}
        />
        <Product
            id="3254354345"
            title="New Ipad Pro (12.9-inch,Wi-Fi,128GB)- Silver (4th Generation)"
            price={79990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
        />
        <Product
        id="1453"
        title="
        Vudy Engineered Wood Wall Shelves ,Glossy Finish ,Set Of 5,Black"
        price={3000}
        image="https://m.media-amazon.com/images/I/81xH6f+l88L._SL1500_.jpg"
        rating={4}
        />
        
        </div>

        <div className='home__row'>
    
    <Product
    id="4569"
    title="Samsung CF390 27 16:9 Curved LCD FHD 1920x1080 Curved Desktop Black Monitor for Multimedia, Personal,
     Business, HDMI, VGA, VESA Mountable, Eye Saver Mode & Flicker Free Technology"
    price={59999}
    image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    rating={4}
    />
      </div>
      </div>
      </div>
  
}

export default Home
