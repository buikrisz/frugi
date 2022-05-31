import React from 'react';
import './PestServiceCard.css';

function ServiceCard({ id, img, title, intro, setShowDetails }) {

	return (
		<div className='serviceCard' onClick={() => setShowDetails({ show: true, id })}>
			<img src={img} alt={img} />
			<h4>{title}</h4>
			<h6>{intro}</h6>
			<button>Több</button>
		</div>
	)
  }

export default ServiceCard;