import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

function ContactInfoCard({ icon, title, text }) {
  return icon === "phone" ? (
    <a href="tel:+3670-338-4734" className="contactInfoCard phoneInfoCard">
      <FiPhoneCall className="icon" />
      <div>
        <h3>{title}</h3>
        <a href="tel:+3670-338-4734">{text}</a>
      </div>
    </a>
  ) : (
    <div className="contactInfoCard">
      {icon === "location" ? (
        <IoLocationOutline className="icon" />
      ) : (
        <GoMail className="icon" />
      )}
      <div>
        <h3>{title}</h3>
        {icon === "phone" ? (
          <a href="tel:+3670-338-4734">{text}</a>
        ) : (
          <h5>{text}</h5>
        )}
      </div>
    </div>
  );
}

export default ContactInfoCard;
