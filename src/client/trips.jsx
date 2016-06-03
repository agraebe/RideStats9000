import React from 'react';
import { Panel } from 'react-bootstrap';

const generateIconDivs = numberOfTrips => {
  const iconTotal = Math.ceil(numberOfTrips/10);
  const remainder = numberOfTrips / 10;
  const cutWidth = (remainder ? 100 * remainder : 100) +  'px';
  const icons = [];
  for (let i = 0; i < iconTotal; i++) {  
    icons.push(i);
  }
  return icons.map((icon, iconIndex) => {
    if (iconIndex === icons.length - 1) {
      return <div key={iconIndex} className="text-left" style={{ minHeight: '100px', minWidth: '100px', maxHeight: '100px', maxWidth: '100px', display: 'inline-block' }}><div style={{ minHeight: '100px', minWidth: cutWidth, overflow: 'hidden', display: 'inline-block', background: 'url(assets/carIconRed.png) no-repeat' }} ></div></div>;
    }
    return <div key={iconIndex} style={{ minHeight: '100px', minWidth: '100px', display: 'inline-block', background: 'url(assets/carIconRed.png) no-repeat' }}></div>;
  });
}

const Trips = ({ numberOfTrips }) => {
  const iconDivs = generateIconDivs(numberOfTrips);
  const title = (<h3><i className="fa fa-car" aria-hidden="true"></i> Total Rides</h3>)
  return (
    <div>
      <Panel className="panel-primary" header={title}>
        <h3 className="text-center">You've taken <strong>{numberOfTrips}</strong> rides with Uber</h3>
        <div className="text-center">{iconDivs}</div>
        <h3 className="text-center"><small>One car represents 10 rides</small></h3>
      </Panel>
    </div>
  )
}

export default Trips;