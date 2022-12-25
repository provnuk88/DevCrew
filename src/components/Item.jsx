import React from 'react'
import '../styles/Item.css'

const Item = ({ name, price, icons, small }) => {            //in parentheses, we restructure the object.


  return (
    <div className='item'>
      <div className='item_logo'>
        <img className='item_logo_img' src={icons} alt="figma" />
      </div>
      <div className='item_name_wrapper'>
        <h6 className='item_name'>{name}</h6>
        <span className='item_name_price'>{price}</span>
      </div>
      <p className='item_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <div className='wrapper'>
        <div>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="8" fill="#1E252B" />
            <path d="M26.8334 12.25C24.3834 12.25 22.225 13.475 21 15.4C19.775 13.475 17.6167 12.25 15.1667 12.25C11.3167 12.25 8.16669 15.4 8.16669 19.25C8.16669 26.1917 21 33.25 21 33.25C21 33.25 33.8334 26.25 33.8334 19.25C33.8334 15.4 30.6834 12.25 26.8334 12.25Z" fill="white" fill-opacity="0.38" />
          </svg>
          <img src="\assets\componentIcon\Folder.svg" alt="folder" />
        </div>
        <span className='item_visit'>
          Visit
        </span>
      </div>

    </div>
  )
}

export default Item