
import React, { useContext } from 'react'
import './css/ShopCategory.css';
import Item from '../Components/Items/Item';
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDropdownCircle } from "react-icons/io";

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);
  return (
    <>
      <div className="shp-category">
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategoey-indexshort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <IoIosArrowDropdownCircle className='sort-icon'/>
          </div>
        </div>
        <div className="shopcategory-products">
          {
            all_products.map((item,i)=>{
              if(props.category === item.category)
              {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }else{
                return null;
              }
            })
          }
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </>
  )
}

export default ShopCategory