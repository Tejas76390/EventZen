import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1E2A38', 
      color: 'white', 
      textAlign: 'center', 
      padding: '10px', 
      position: 'fixed', 
      bottom: '0', 
      width: '100%' 
    }}>
      <p>&copy; {new Date().getFullYear()} EventZen. Website developed by Tejas Shetty</p>
    </footer>
  );
};

export default Footer;


