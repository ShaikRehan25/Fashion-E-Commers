
import React, { useContext, useState } from 'react'
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
        <div className="navbar">
            <div className="nav-logo">
                <img src="https://previews.123rf.com/images/cosmaa/cosmaa1901/cosmaa190100036/126334106-vector-illustration-of-supermarket-shopping-cart-cartoon-object-on-white-background.jpg" alt="Shopping-Logo" />
                <p>SHOPPING</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link> {menu === 'shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men</Link> {menu === 'mens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women</Link> {menu === 'womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link> {menu === 'kids'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><FaShoppingCart className='login-icon'/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    </>
  )
}

export default Navbar