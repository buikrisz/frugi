import React from 'react';
import './PestServiceDetails.css';
import { FaTimes } from 'react-icons/fa';

function ServiceDetails({ img, title, text, setShowDetails }) {
    function handleClick(e) {
        e.target.classList.contains("serviceDetailsBg") && setShowDetails({ show: false, id: null });
    }
    return (
        <div className='serviceDetailsBg' onClick={handleClick}>
            <div className='serviceDetails'>
                <button onClick={() => setShowDetails({ show: false, id: null })}><FaTimes className='icon' /></button>
                <img src={img} alt={img} />
                <h4>{title}</h4>
                <h6>{text}</h6>
            </div>
        </div>
    )
}

export default ServiceDetails;