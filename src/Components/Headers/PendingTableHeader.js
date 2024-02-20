import React, { useState } from 'react';
import './PendingTableHeader.css'; 
import { Container } from 'react-bootstrap';

function Header({ handleHeaderClick }) {
  const [selectedHeader, setSelectedHeader] = useState('Pending');

  const handleClick = (headerName) => {
    setSelectedHeader(headerName);
    handleHeaderClick(headerName);
  };

  return (
    <Container className="header-container">
      <span className={selectedHeader === 'Pending' ? 'selected-header' : 'header'} onClick={() => handleClick('Pending')}>Pending</span>
      <span className={selectedHeader === 'Accepted' ? 'selected-header' : 'header'} onClick={() => handleClick('Accepted')}>Accepted</span>
      <span className={selectedHeader === 'AWBCreated' ? 'selected-header' : 'header'} onClick={() => handleClick('AWBCreated')}>AWB Created</span>
      <span className={selectedHeader === 'ReadyToShip' ? 'selected-header' : 'header'} onClick={() => handleClick('ReadyToShip')}>Ready To Ship</span>
      <span className={selectedHeader === 'Shipped' ? 'selected-header' : 'header'} onClick={() => handleClick('Shipped')}>Shipped</span>
      <span className={selectedHeader === 'Completed' ? 'selected-header' : 'header'} onClick={() => handleClick('Completed')}>Completed</span>
      <span className={selectedHeader === 'Cancelled' ? 'selected-header' : 'header'} onClick={() => handleClick('Cancelled')}>Cancelled</span>
    </Container>
  );
}

export default Header;
