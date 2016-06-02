import React from 'react';
import { Panel } from 'react-bootstrap';

const Trips = ({ numberOfTrips }) => {
  const iconTotal = Math.ceil(numberOfTrips/10);
  const remainder = Math.ceil(numberOfTrips/10) - (numberOfTrips/10);
  const cutWidth = (remainder ? 100 * remainder : 100) +  'px';
  const icons = [];
  for (let i = 0; i < iconTotal; i++) {  
    icons.push(i);
  }
  const iconDivs = icons.map((icon, iconIndex) => {
    if (iconIndex === icons.length - 1) {
      return <div key={iconIndex} style={{ minHeight: '100px', minWidth: cutWidth, overflow: 'hidden', display: 'inline-block', background: 'url(carIconRed.png) no-repeat' }} ></div>;
    }
    return <div key={iconIndex} style={{ minHeight: '100px', minWidth: '100px', display: 'inline-block', background: 'url(carIconRed.png) no-repeat' }}></div>;
  });
  const title = (<h3>Total Rides</h3>)
  return (
    <div>
      <Panel header={title}>
        <h3>You've taken <span>{numberOfTrips}</span> rides with Uber</h3>
        <div>{iconDivs}</div>
        <p>One car represents 10 rides</p>
      </Panel>
    </div>
  )
}

export default Trips;