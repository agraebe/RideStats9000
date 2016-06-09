import React from 'react';
import { Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const generateDistanceGraphData = (longestRideDistance, averageRideDistance) => {
  const labels = ['Longest Ride', 'Average Ride'];
  const data = [longestRideDistance, averageRideDistance];
  return {
    labels,
    datasets: [{
      label: 'Distance',
      fillColor: ['#970015', '#149c82'],
      backgroundColor: ['#970015', '#149c82'],
      borderColor: ['#970015', '#149c82'],
      borderWidth: 10,
      hoverBackgroundColor: '#149c82',
      hoverBorderColor: '#149c82',
      data,
    }],
  };
};

const Distance = ({ distanceTraveled, longestRideDistance, averageRideDistance }) => {
  const graphData = generateDistanceGraphData(longestRideDistance, averageRideDistance);
  const graphOptions = { responsive: true };
  const title = (<h3><i className="fa fa-road" aria-hidden="true"></i> Distance Traveled</h3>);
  return (
    <Panel className="panel-primary" header={title}>
      <h3 className="text-center">
        You've traveled <strong>{distanceTraveled}</strong> miles total
      </h3>
      <h3 className="text-center">
        <small>Your longest ride ever was <strong>{longestRideDistance} miles</strong></small>
      </h3>
      <div className="text-center">
        <Bar
          data={graphData}
          options={graphOptions}
          height={400}
          width={400}
        />
      </div>
    </Panel>
  );
};

export default Distance;
