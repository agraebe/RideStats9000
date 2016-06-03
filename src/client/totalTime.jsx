import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const TotalTime = ({ timeWaiting, timeRiding }) => {
  const title = (<h3>Total Ride and Wait Times</h3>);
  return(
    <Panel className="panel-primary" header={title}>
      <Row>
        <Col xs={4} md={4}>
          <div className="pull-right"><img className="img-responsive" src="/assets/traffic.png" /></div>
        </Col>
        <Col xs={8} md={8}>
          <h2 className="text-left text-muted">You've waited for Ubers a total of</h2>
          <h2 className="text-left text-primary">{timeWaiting.days > 0 ? timeWaiting.days > 1 ? timeWaiting.days + ' days,' : timeWaiting.days + ' day,' : null} {timeWaiting.hours} hours, {timeWaiting.minutes} minutes, and {timeWaiting.seconds} seconds</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4}>
          <div className="pull-right"><img className="img-responsive" src="/assets/carwheel.png" /></div>
        </Col>
        <Col xs={8} md={8}>
          <h2 className="text-left text-muted">You've ridden in Ubers a total of</h2>
          <h2 className="text-left text-primary">{timeRiding.days > 0 ? timeRiding.days > 1 ? timeRiding.days + ' days,' : timeRiding.days + ' day,' : null} {timeRiding.hours} hours, {timeRiding.minutes} minutes, and {timeRiding.seconds} seconds</h2>
        </Col>
      </Row>
    </Panel>
  );
}

export default TotalTime