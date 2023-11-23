

// -------------------------------- E-Commers-Project-website  ----------------------------------->

import React from 'react'
import Navbar from './E-Commers-PT/Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './E-Commers-PT/Pages/Shop';
import ShopCategory from './E-Commers-PT/Pages/ShopCategory';
import Product from './E-Commers-PT/Pages/Product';
import Cart from './E-Commers-PT/Pages/Cart';
import LoginSignup from './E-Commers-PT/Pages/LoginSignup';
import Footer from './E-Commers-PT/Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner = 'https://img.freepik.com/premium-psd/fashion-sale-social-media-facebook-cover-design-template_169307-1928.jpg?w=2000' category ='mens'/>}/>
        <Route path='/womens' element={<ShopCategory banner = 'https://ttascott.in/uploads/slider/slider02.jpg' category ='womens'/>}/>
        <Route path='/kids' element={<ShopCategory banner = 'https://stylehub.shoppersstop.com/wp-content/uploads/2021/08/kidsBuyingGuide.jpg' category ='kids'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

// ------------------------------------------------------------------------------------------------->