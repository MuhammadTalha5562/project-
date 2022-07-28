import React from 'react'
import './css/header.css';
const Header = () => {
  return (
   
   <header className='header'>
    <div className='logo_style'>
    <h1 ><img src="https://pieinthesky.com.pk/store/images/identity/logo/logo-pieinthesky.png" height={50} width={84} alt="" /></h1>
   </div>
   <ul className='dropdown'><li className='fas fa-bars'>&nbsp;&nbsp;&nbsp;<span className='style_menu'>Menu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li></ul>
  <div className='seach_style'>
  <span className='Style_search'><a className='style_icon'><i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;Search</a></span>
  </div>
   <div className='Button_style'>
    <button className='style_button2'>Login</button>
   <button className='style_button'>Register</button>
   </div>
    <div className='style_icon_2'>
    <i class="fa-solid fa-bag-shopping"></i>
    </div>
   </header>
   
  )
}

export default Header