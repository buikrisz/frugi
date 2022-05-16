import React from 'react';
import './PestServiceCard.css';

function ServiceCard({ id, img, title, setShowDetails }) {

	return (
		<div className='serviceCard' onClick={() => setShowDetails({ show: true, id })}>
			<img src={img} alt={img} />
			<h4>{title}</h4>
			<button>Több</button>
		</div>
	)
  }

export default ServiceCard;