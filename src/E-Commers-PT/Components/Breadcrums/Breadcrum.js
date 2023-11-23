
import React from 'react'
import './Breadcrum.css';
import { HiOutlineChevronRight } from "react-icons/hi";

function Breadcrum(props) {
    const {product} = props;
  return (
    <>
        <div className='breadcrum'>
            HOME <HiOutlineChevronRight />SHOP <HiOutlineChevronRight /> {product.category} <HiOutlineChevronRight /> {product.name}
        </div>
    </>
  )
}

export default Breadcrum