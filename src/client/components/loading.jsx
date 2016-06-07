import React from 'react';
import Spinner from 'react-spin';

const generateSpinConfig = () => ({
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
  hwaccel: false,
  position: 'relative',
});

const Loading = ({ demo }) => {
  const spinConfig = generateSpinConfig();
  return (
    <div>
      <h3 className="text-center">Retrieving {demo ? 'demo' : 'your' } Uber statistics...</h3>
      <div className="spinner-container">
          <Spinner config={spinConfig} />
      </div>
    </div>
  );
};

export default Loading;
