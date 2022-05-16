import React from 'react';
import './Footer.css';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
        <a href="https://www.facebook.com/FrugiOzone" target="_blank" rel="noopener noreferrer"><BsFacebook className='footerIcon' /></a>
        <a href="https://www.instagram.com/frugiozone/" target="_blank" rel="noopener noreferrer"><BsInstagram className='footerIcon' /></a>
    </footer>
  )
}

export default Footer;