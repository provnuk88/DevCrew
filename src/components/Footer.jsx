import React from 'react'
import '../styles/Footer.css'

const Footer = () => {


  return (

    <footer className='main_footer'>
      <div className='company'>
        <div className='company_logo'>
          <img src="\assets\image\logo.svg" alt="logo" />
          <p className='logo_name'>antools.</p>
        </div>
        <p className='logo_main'>Copyright 2021. Antools</p>
        <p className='footer_desc'>Antool is a web collection of information on paid
          or free Design and Development tools</p>
      </div>
      <div>
        <p className='footer_title'>Contact Us</p>
        <a className='footer_link' href="tel:+621987463">+621987463</a>
        <p className='footer_link' >M Building, No.10 A</p>
        <a className='footer_link' href="mailto:antools@awesome.com">antools@awesome.com </a>
      </div>
      <div>
        <p href='#' className='footer_title'>Categories</p>
        <a href='#' className='footer_link'>Design</a>
        <a href='#' className='footer_link'>Development</a>
      </div>
      <div>
        <p className='footer_title'>Company Info</p>
        <a href='#' className='footer_link'>About Us</a>
        <a href='#' className='footer_link'>Our Partners</a>
        <a href='#' className='footer_link'>Blog</a>
      </div>
    </footer>
  )
}

export default Footer