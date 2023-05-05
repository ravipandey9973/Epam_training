import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    const signature='Ravi Pandey';
  const today = new Date().toLocaleDateString();


  return (
    <footer>
      <div id='copy'>
        <h3>Copy Right ©</h3>
        <p>Submitted by Ravi Pandey</p>
      </div>
      <div id='ico'>
      <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="2xl" style={{ marginRight: '12px' }} />
      <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="2xl" style={{ marginRight: '12px' }} />
      <FontAwesomeIcon icon="fa-brands fa-square-twitter" size="2xl" style={{ marginRight: '12px' }} />
      <FontAwesomeIcon icon="fa-brands fa-medium" size="2xl" style={{ marginRight: '12px' }} />
      </div>
      <div id='sig'>
        <p>{signature}</p>
        <p>Date: {today}</p>
      </div>
    </footer>
  );
}

export default Footer;
