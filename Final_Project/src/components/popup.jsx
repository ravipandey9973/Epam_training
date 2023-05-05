import React from 'react';
import './popup.css';

function Popup(props) {
    // const data = props.data.details;
    const onClose = props.onClose;
    const number=props.data.number;
    const name=props.data.name;
    const fullname=props.data.fullname;
    const contact = props.data.contact;
    const email=props.data.email;
    const address=props.data.address;
    const field=props.data.field;
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>X</button>
          <h2>Full Details of Student {name}</h2>
          <p>Number : {number}</p>
          <p>Full Name : {fullname}</p>
          <p>Contact Number : {contact}</p>
          <p>E-Mail : {email}</p>
          <p>Address : {address}</p>
          <p>Specialization : {field}</p>
        </div>
      </div>
    );
  }

export default Popup;