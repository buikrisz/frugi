import React from 'react';
import './PestServiceDetails.css';
import { FaTimes } from 'react-icons/fa';

function ServiceDetails({ img, title, text, setShowDetails }) {
  return (
    <div className='serviceDetails'>
        <button onClick={() => setShowDetails({ show: false, id: null })}><FaTimes className='icon' /></button>
        <img src={img} alt={img} />
        <h4>{title}</h4>
        <h6>{text}</h6>
    </div>
  )
}

export default ServiceDetails;