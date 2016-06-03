import React from 'react';
import { Panel } from 'react-bootstrap';
import Spinner from 'react-spin';

const Loading = () => {
  var spinConfig = {
      lines: 13, 
      length: 28,
      width: 14,
      radius: 42,
      scale: 1,
      corners: 1,
      color: '#000',
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: 1,
      trail: 60,
      fps: 20,
      zIndex: 2e9,
      className: 'spinner',
      top: '30%',
      left: '50%',
      shadow: false,
      hwaccel: false,
      position: 'absolute',
  }
  return (
    <div>
        <h3 className="text-center">Retrieving Uber statistics...</h3>
        <Spinner config={spinConfig} />
    </div>
  );
}

export default Loading;