import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#f1f1f1', marginTop: 'auto' }}>
      <p>&copy; {currentYear} Edukalis. All rights reserved.</p>
    </footer>
  );
}

export default Footer;