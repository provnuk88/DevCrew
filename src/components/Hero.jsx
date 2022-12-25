import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
    
    return (
        <div className='main_hero'>
            <div className='nav_group'>
                <div className='logo'>
                    <img className='logo_icon' src='\assets\image\logo.svg' alt='logo'></img>
                    <span className='logo_name'>antools.</span>
                </div>
                <div className='menu'>
                    <a className='button_menu'>Home</a>
                    <a className='button_menu chevron'>Categories
                        <img className='chevron' src="\assets\image\chevron-down.svg" alt="chevron" />
                    </a>
                    <a className='button_menu'>My Collection</a>
                    <a className='button_menu'>Blog</a>
                </div>
                <div className='login'>
                    <a className='log'>Login</a>
                    <a className='sing_up'>Sing Up</a>
                </div>
            </div>
            <div className='sub_menu'>
                <h1 className='sub_menu_title'>Awesome tools for Designer & Developer <strong>.</strong> </h1>
                <p className='sub_menu_desc'>Antool is a web collection of information on paid or free Design and Development tools</p>
                <form className='sub_menu_form'>
                    <div className='sub_menu_input_wrapper'>
                        <img src="\assets\image\search.svg" alt="search" />
                        <input className='sub_menu_imput' placeholder='find more than 430+ tools...' type="text" />
                    </div>
                    <button className='sing_up'>Search</button>
                </form>
            </div>
            <div className='Illustration'>
                <img src="\assets\image\Illustration.svg" alt="Illustration" />
            </div>
            <div>
                <a href='#' className='social_link'><img src="\assets\image\facebook.svg" alt="facebook" /></a>
                <a href='#' className='social_link'><img src="\assets\image\inst.svg" alt="instagram" /></a>
                <a href='#' className='social_link'><img src="\assets\image\twitter.svg" alt="twitter" /></a>
            </div>
        </div>
    )
}

