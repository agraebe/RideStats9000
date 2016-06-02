import React from 'react';
import { Panel } from 'react-bootstrap';

const Time = ({ timeWaiting, timeRiding, averageRideWaiting, averageRideRiding }) => {
  const title = (<h3>Ride Time</h3>);
  return(
    <Panel header={title}>
      <h3>You've spent {timeWaiting.days} days, {timeWaiting.hours} hours, {timeWaiting.minutes} minutes, and {timeWaiting.seconds} seconds waiting for rides</h3>
      <h3>Your average wait time is {averageRideWaiting.minutes} minutes {averageRideWaiting.seconds} seconds.</h3>
      <h3>You've spent {timeRiding.days} days, {timeRiding.hours} hours, {timeRiding.minutes} minutes, and {timeRiding.seconds} seconds on rides</h3>
      <h3>Your average ride time is {averageRideRiding.minutes} minutes {averageRideRiding.seconds} seconds.</h3>          
    </Panel>
  )
}

export default Time