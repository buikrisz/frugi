import React from 'react';
import './Footer.css';
import { BsInstagram, BsFacebook } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/FrugiOzone" target="_blank" rel="noopener noreferrer nofollow"><BsFacebook className='footerIcon' /></a>
            <a href="https://www.instagram.com/frugiozone/" target="_blank" rel="noopener noreferrer nofollow"><BsInstagram className='footerIcon' /></a>
            <h4>|</h4>
            <div className='footerLinks'>
                <a href='/dokumentumok#iconok'>Ikon gyűjtemény</a>
                {/* <a href='/dokumentumok#biztonsagi'>Biztonsági adatlapok</a> */}
                <a href='/adatvedelmi'>Adatvédelmi nyilatkozat</a>
            </div>
        </footer>
    )
}

export default Footer;