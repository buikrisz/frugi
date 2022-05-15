import React from 'react';
import './HeaderSubPage.css'
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function HeaderSubPage() {
  return (
    <header className='headerSubPage'>
        <Link to="/" className='backToMainLink'><IoMdArrowBack className='backArrow' /></Link>
    </header>
  )
}

export default HeaderSubPage;