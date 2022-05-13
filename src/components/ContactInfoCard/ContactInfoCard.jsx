import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

function ContactInfoCard({ icon, title, text}) {
  return (
    <div className="contactInfoCard">
        {icon === "location" ? <IoLocationOutline className='icon' /> : icon === "phone" ? <FiPhoneCall className='icon' /> : <GoMail className='icon' />}
        <div>
            <h3>{title}</h3>
            <h5>{text}</h5>
        </div>
    </div>
  )
}

export default ContactInfoCard;