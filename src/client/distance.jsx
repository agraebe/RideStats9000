import React from 'react';
import { Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const generateDistanceGraphData = (distanceTraveled, longestRideDistance, averageRideDistance) => {
  const labels = ['Longest Ride Distance', 'Average Ride Distance'];
  const data = [longestRideDistance, averageRideDistance];
  return {
    labels,
    datasets: [{
      label: 'Distance',
      fillColor: ['#149c82','#970015'],
      backgroundColor: ['#149c82','#970015'],
      borderColor: ['#149c82','#970015'],
      borderWidth: 10,
      hoverBackgroundColor: '#149c82',
      hoverBorderColor: '#149c82',
      data
    }]
  };
}

const Distance = ({ distanceTraveled, longestRideDistance, averageRideDistance }) => {
  const distanceGraphData = generateDistanceGraphData(distanceTraveled, longestRideDistance, averageRideDistance);
  const title = (<h3><i className="fa fa-road" aria-hidden="true"></i> Distance Traveled</h3>)
  return(
    <Panel className="panel-primary" header={title}>
      <h3 className="text-center">You've traveled a total of <strong>{distanceTraveled} miles</strong></h3>
      <h3 className="text-center"><small>Your longest ride ever was <strong>{longestRideDistance} miles</strong></small></h3>
      <div className="text-center">
        <Bar
          data={distanceGraphData}
          options={{responsive: true}}
          height={400}
          width={400}
        />
      </div>
    </Panel>
  );
}

export default Distance