import React from 'react';
import { Panel } from 'react-bootstrap';

const Distance = ({ distanceTraveled, averageRideDistance, longestRideDistance }) => {
  const title = (<h3>Distance Traveled</h3>)
  return(
    <Panel header={title}>
      <h3>You've traveled a total of {distanceTraveled} miles.</h3>
      <h3>Your average ride length is {averageRideDistance} miles.</h3>
      <h3>Your longest ride ever was {longestRideDistance} miles.</h3>
    </Panel>
  )
}

export default Distance