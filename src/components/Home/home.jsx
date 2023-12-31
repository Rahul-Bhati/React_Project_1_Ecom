import React from 'react';
import { Product } from '../index';
import './home.css';

const home = () => {
  return (
      <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home_image" />

                <div className="home_row">
                  <Product/>
                  <Product/>
                </div>

                <div className="home_row">
                  <Product/>
                  <Product/>
                  <Product/>
                </div>
            </div>   
        </div> 
  )
}

export default home