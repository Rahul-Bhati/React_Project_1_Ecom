import React from 'react';
import './header.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

const header = () => {
  return (
    <div className='header'>

            <div className="header_logo">
                 <StoreIcon className='header_logo' fontSize='large' />
                 <div className="header_logoTitle">eSHOPER</div>
            </div>
            <div className="header_search">
                 <input type='text' className='header_searchInput' />
                 <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                 <div className="navItem">
                      <span className="itemLineOne">Hello Guest</span>
                      <span className="itemLineTwo">Login</span>
                 </div>
                 <div className="navItem">
                      <span className="itemLineOne">Your</span>
                      <span className="itemLineTwo">Shop</span>
                 </div>
                 <div className="navItemBucketList">
                      <ShoppingCartIcon />
                      <span className="itemLineTwo nav__basketCount">0</span>
                 </div>
            </div>
    </div>
  )
}

export default header