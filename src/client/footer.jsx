import React from 'react';

const Footer = () => {
  return (
    <footer className="footer navbar-fixed-bottom">
      <div className="text-center container footer-content">
          <p className="footer-text">
            Made with React, Node, and <i style={{color: '#FF0000', paddingLeft: '2px'}}className="fa fa-heart faa-pulse animated footer-pulse-heart"></i>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
