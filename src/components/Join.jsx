import React from 'react'
import '../styles/Join.css'




const Join = () => {

  return (
    <div className='join_main'>
      <p className='join_main_title'>Become a contributor?
        <p className='join_main_desc'>Join us and get tips & tricks to become a great Designer and Developer</p>
      </p>

      <form className='sub_menu_form'>
        <div className='sub_menu_input_wrapper'>
          <img src="\assets\image\search.svg" alt="search" />
          <input className='sub_menu_imput' placeholder='Enter youre email...' type="text" />
        </div>
        <button className='sing_up'>Search</button>
      </form>
    </div>
  )
}

export default Join
