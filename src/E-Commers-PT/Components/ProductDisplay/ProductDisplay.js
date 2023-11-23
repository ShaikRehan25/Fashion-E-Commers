
import React, { useContext } from 'react'
import './ProductDisplay.css';
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    
  return (
    <>
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                <IoStar className='star-ratings-icons'/>
                <IoStar className='star-ratings-icons'/>
                <IoStar className='star-ratings-icons'/>
                <IoStarHalf className='star-ratings-icons'/>
                <IoStarOutline className='star-ratings-icons'/>
                <p>(145)</p>
                </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Crafted from cotton blend fabric, the shirt brings the benefit of cotton blended with other fibres. The premium material ensures comfort and breathability to make you feel breezy and relaxed throughout the day. Additionally, the premium cotton blend fabric makes sure that the shirt retains its feel and look for a long time.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    </>
  )
}

export default ProductDisplay