import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { RxCross1 } from "react-icons/rx";

function CartItems() {
  const { getTotalCartAmount,all_products, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      // {
      //   all_products.map((e)=>{
      //    if(CartItems[e.id]>0)
      //     {
      //       return <div>
      //         <div className="cartitems-format">
      //           <img src={e.image} alt="" className="carticon-product-icon"/>
      //           <p>{e.name}</p>
      //           <p>₹{e.new_price}</p>
      //           <button className="cartitems-quantity">{CartItems[e.id]}</button>
      //           <p>{e.new_price*CartItems[e.id]}</p>
      //           <RxCross1  onClick={()=>{removeFromCart(e.id)}}/>
      //         </div>
      //         <hr />
      //       </div>
      //     }
      //     return null;
      //   })
      // }  

             <div>
              <div className="cartitems-format cartitems-format-main">
                <img src="https://rukminim2.flixcart.com/image/832/832/l02r1jk0/top/z/v/f/xxl-00395-top-adokedo-original-imagby5u4798h6uh.jpeg?q=70" alt="" className="carticon-product-icon"/>
                <p>Name</p>
                <p>₹145</p>
                <button className="cartitems-quantity">me</button>
                <p>₹145</p>
                <RxCross1 className="cross-icon" onClick={()=>{removeFromCart()}}/>
              </div>
              <hr />
            </div> 

            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                  <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount}</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <hr />
                  <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount}</h3>
                  </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitem-promobox">
                  <input type="text" placeholder="promo code"/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}

export default CartItems;

