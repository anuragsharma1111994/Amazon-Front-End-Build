import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img
          class="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        />

        <div class="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={24.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product 
            title="Microsoft Surface Laptop 3 Intel Core™ i5 10th Gen"
            price={650.34}
            image="https://m.media-amazon.com/images/I/61cuElU6PaL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div class="home__row">
          <Product
            title='ALOIN Magnetic Lock Stainless Steel Milanese Strap Band Compatible with Apple Watch Series 1/2/3/4/5 - (44mm,42mm, Black/Red)'
            price={322.12}
            image='https://m.media-amazon.com/images/I/61ebuY9TgmL._AC_UL480_FMwebp_QL65_.jpg'
          />
          <Product
            title='Samsung Galaxy Fold 5G (Black, 12GB RAM, 512GB Storage)'
            price={999.99}
            image='https://m.media-amazon.com/images/I/71LhAERRPaL._AC_UL320_.jpg'
          />
          <Product
            title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)'
            price={32.1}
            image='https://m.media-amazon.com/images/I/7128HRanJgL._AC_UL320_.jpg'
          />
          
        </div>
        <div class="home__row">
          <Product
            title='HP 34-inch Curved Ultra-Thin Bezel Less QHD IPS Monitor-AMD Free Sync, 300 Nits with Audio in, Headphone, USB, HDMI, Display Ports - HP 34f Curve Monitor (6JM51AA)'
            price={443.2}
            image='https://m.media-amazon.com/images/I/71BSoHN+8lL._AC_UL320_.jpg'
          />          
        </div>
      </div>
    </div>
  );
}

export default Home;
