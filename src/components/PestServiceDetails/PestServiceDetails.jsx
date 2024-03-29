import React from "react";
import "./PestServiceDetails.css";
import { FaTimes } from "react-icons/fa";

function ServiceDetails({ img, title, text, setShowDetails }) {
  function handleClick(e) {
    e.target.classList.contains("serviceDetailsBg") &&
      setShowDetails({ show: false, id: null });
  }
  return (
    <div
      itemScope
      itemType="https://schema.org/ProfessionalService"
      className="serviceDetailsBg"
      onClick={handleClick}
    >
      <div className="serviceDetails">
        <button onClick={() => setShowDetails({ show: false, id: null })}>
          <FaTimes className="icon" />
        </button>
        <img src={img} alt={img} />
        <h4 itemProp="name">{title}</h4>
        <h6 itemProp="description">{text}</h6>
        <a href="/szolgaltatasok.html">További információk</a>
      </div>
    </div>
  );
}

export default ServiceDetails;
