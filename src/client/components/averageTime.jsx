import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const convertAverageTime = (minutes, seconds) => (minutes + (seconds / 60)).toFixed(2);

const normalizeGraphData = (averageRideWaiting, averageRideRiding) => {
  const averageRideWaitingDec = convertAverageTime(averageRideWaiting.minutes, averageRideWaiting.seconds);
  const averageRideRidingDec = convertAverageTime(averageRideRiding.minutes, averageRideRiding.seconds);
  return [averageRideWaitingDec, averageRideRidingDec];
};

const generateAverageTimeGraphData = (data, labels) => ({
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
});

const AverageTime = ({ averageRideWaiting, averageRideRiding }) => {
  const graphLabels = ['Average Wait', 'Average Ride'];
  const normalizedGraphData = normalizeGraphData(averageRideWaiting, averageRideRiding);
  const graphData = generateAverageTimeGraphData(normalizedGraphData, graphLabels);
  const graphOptions = { responsive: true };
  const title = (<h3><i className="fa fa-clock-o" aria-hidden="true"></i> Average Wait and Ride Times</h3>);
  return (
    <Panel className="panel-primary" header={title}>
      <Row>
        <Col xs={6} md={6}>
          <h3 className="text-center text-primary">{averageRideWaiting.minutes} minutes {averageRideWaiting.seconds} seconds</h3>
          <h3 className="text-center"><small>Average Wait Time</small></h3>
        </Col>
        <Col xs={6} md={6}>
          <h3 className="text-center text-primary">{averageRideRiding.minutes} minutes {averageRideRiding.seconds} seconds</h3>
          <h3 className="text-center"><small>Average Ride Time</small></h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="text-center">
            <Bar
              data={graphData}
              options={graphOptions}
              height={400}
              width={400}
            />
          </div>
        </Col>
      </Row>
    </Panel>
  );
};

export default AverageTime;
