import React from 'react';
import { Bar } from 'react-chartjs';
import { Grid, Row, Col } from 'react-bootstrap';
import Trips from './trips.jsx';
import Distance from './distance.jsx';
import TotalTime from './TotalTime.jsx';
import AverageTime from './AverageTime.jsx';
import Cities from './cities.jsx';
import Days from './days.jsx';

const Stats = ({ data }) => {
  const convertTime = (seconds) => {
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor(seconds % 86400 / 3600),
      minutes: Math.floor(seconds % 3600 / 60),
      seconds: Math.floor(seconds % 3600 % 60)
    }
  }

  const numberOfTrips = data.numberOfTrips;
  const dayData = data.tripsPerDay;
  const cityData = data.tripsPerCity;

  const distanceTraveled = data.totalDistanceTraveled.toFixed(2);
  const longestRideDistance = data.longestRide.distance.toFixed(2);
  const longestRideCity = data.longestRide.city;

  const timeWaiting = convertTime(data.timeSpentWaiting);
  const timeRiding = convertTime(data.timeSpentRiding);

  const averageRideDistance = (distanceTraveled / numberOfTrips).toFixed(2);
  const averageRideWaiting = convertTime(data.timeSpentWaiting / numberOfTrips);
  const averageRideRiding = convertTime(data.timeSpentRiding / numberOfTrips);

  return (
    <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <Trips numberOfTrips={numberOfTrips} />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <AverageTime
                averageRideWaiting={averageRideWaiting} 
                averageRideRiding={averageRideRiding}
              />
            </Col>
            <Col md={6}>
              <Cities 
                cityData={cityData}
                numberOfTrips={numberOfTrips}
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <TotalTime 
                timeWaiting={timeWaiting}
                timeRiding={timeRiding}
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <Distance
                distanceTraveled={distanceTraveled}
                averageRideDistance={averageRideDistance}
                longestRideDistance={longestRideDistance}
              />
            </Col>
            <Col md={6}>
              <Days 
                dayData={dayData}
              />
            </Col>
          </Row>
        </Grid>      
    </div>
  )
}

export default Stats;
