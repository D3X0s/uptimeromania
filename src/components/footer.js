import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Made by <Link to="https://dexo.store/" text="DeXo" />. Next update 5 Min!</p>
        <p>&copy; 2021 <Link to="https://dexo.store/" text="DEXO.STORE" /></p>
      </div>
    </div>
  );
}

export default Footer;
