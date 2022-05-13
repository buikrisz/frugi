import React from 'react';
import './PestServiceCard.css';

function ServiceCard({ id, img, title, setShowDetails }) {

	return (
		<div className='serviceCard'>
			<img src={img} alt={img} />
			<h4>{title}</h4>
			<button onClick={() => setShowDetails({ show: true, id })}>Több</button>
		</div>
	)
  }

export default ServiceCard;