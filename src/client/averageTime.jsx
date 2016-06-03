import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const generateAverageTimeGraphData = (averageRideWaiting, averageRideRiding) => {
  const averageRideWaitingDec = (averageRideWaiting.minutes + (averageRideWaiting.seconds / 60)).toFixed(2);
  const averageRideRidingDec = (averageRideRiding.minutes + (averageRideRiding.seconds / 60)).toFixed(2);
  const labels = ['Average Wait', 'Average Ride'];
  const data = [averageRideWaitingDec, averageRideRidingDec];
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

const AverageTime = ({ averageRideWaiting, averageRideRiding }) => {
  const averageTimeGraphData = generateAverageTimeGraphData(averageRideWaiting, averageRideRiding);
  const title = (<h3>Average Ride and Wait Times</h3>);
  return(
    <Panel className="panel-primary" header={title}>
      <Row>
        <Col xs={6} md={6}>
          <h3 className="text-center"><small>Your average wait time is</small></h3>
          <h4 className="text-center text-primary">{averageRideWaiting.minutes} minutes {averageRideWaiting.seconds} seconds</h4>
        </Col>
        <Col xs={6} md={6}>
          <h3 className="text-center"><small>Your average ride time is</small></h3>
          <h4 className="text-center text-primary">{averageRideRiding.minutes} minutes {averageRideRiding.seconds} seconds</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="text-center">
            <Bar
              data={averageTimeGraphData}
              options={{responsive: true}}
              height={300}
              width={300}
            />
          </div>
        </Col>
      </Row>
    </Panel>
  )
}

export default AverageTime
