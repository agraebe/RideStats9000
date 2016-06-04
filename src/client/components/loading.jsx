import React from 'react';
import { Panel } from 'react-bootstrap';
import Spinner from 'react-spin';

const generateSpinConfig = () => {
  return {
    lines: 13, 
    length: 28,
    width: 14,
    radius: 42,
    scale: 1,
    corners: 1,
    color: '#2c3e50',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1.0,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    className: 'spinner',
    shadow: false,
    hwaccel: false
  };
}

const Loading = () => {
  const spinConfig = generateSpinConfig();
  return (
    <div>
        <h3 className="text-center">Retrieving Uber statistics...</h3>
        <Spinner config={spinConfig} />
    </div>
  );
}

export default Loading;