import React from 'react';
import { Panel } from 'react-bootstrap';

const Login = ({ handleLoginClick, handleDemoClick }) => {
  return (
    <div>
        <h3 className="text-center">RideStats9000 calculates statistics about your Uber usage</h3>
        <div className="text-center"><img className="center-block img-rounded img-responsive" src="assets/login.jpg" /></div>
        <h4 className="text-center">Click <a className="link-demo" onClick={handleDemoClick}><strong>Demo</strong></a> or <a className="link-login" onClick={handleLoginClick}><strong>Log in</strong></a> to get started</h4>
    </div>
  );
}

export default Login;