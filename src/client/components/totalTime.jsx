import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';

const generateWaitingDays = days => {
  if (days > 1) {
    return days + ' days,';
  } else if (days === 1) {
    return days + ' day,';
  }
  return null;
};

const TotalTime = ({ timeWaiting, timeRiding }) => {
  const title = (<h3><i className="fa fa-clock-o" aria-hidden="true"></i> Total Wait and Ride Times</h3>);
  return (
    <Panel className="panel-primary" header={title}>
      <Row style={{ marginBottom: '20px' }}>
        <Col xs={4} md={4}>
          <div className="pull-right"><img className="img-responsive" src="/assets/traffic.png" /></div>
        </Col>
        <Col xs={8} md={8}>
          <h3 className="text-left text-muted">You've waited for Ubers a total of</h3>
          <h2 className="text-left text-primary"><strong>{generateWaitingDays(timeWaiting.days)} {timeWaiting.hours} hours, {timeWaiting.minutes} minutes, and {timeWaiting.seconds} seconds</strong></h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4}>
          <div className="pull-right"><img className="img-responsive" src="/assets/carwheel.png" /></div>
        </Col>
        <Col xs={8} md={8}>
          <h3 className="text-left text-muted">You've ridden in Ubers a total of</h3>
          <h2 className="text-left text-primary"><strong>{generateWaitingDays(timeRiding.days)} {timeRiding.hours} hours, {timeRiding.minutes} minutes, and {timeRiding.seconds} seconds</strong></h2>
        </Col>
      </Row>
    </Panel>
  );
};

export default TotalTime;
