import React from 'react';
import { Bar } from 'react-chartjs';
import { Grid, Row, Col } from 'react-bootstrap';
import Trips from './trips.jsx';
import Distance from './distance.jsx';
import Time from './time.jsx';

const Stats = ({ data }) => {
  const generateCityBarData = cityData => {
    const labels = Object.keys(cityData);
    const data = labels.map(city => cityData[city])
    const cityBarData = {
      labels,
      datasets: [{
        label: 'Trips Per City',
        fillColor: 'rgba(52, 152, 219, .28)',
        borderWidth: 10,
        hoverBackgroundColor: '#2980b9',
        hoverBorderColor: '#2980b9',
        data
      }]
    }
    return cityBarData;
  }

  const generateDayBarData = dayData => {
    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const data = dayData;
    const dayBarData = {
      labels,
      datasets: [{
        label: 'Trips Per Day',
        fillColor: 'rgba(52, 152, 219, .28)',
        borderWidth: 10,
        hoverBackgroundColor: '#2980b9',
        hoverBorderColor: '#2980b9',
        data
      }]
    }
    return dayBarData;
  }

  const getModeDay = dayData => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const modeDayInt = Math.max(...dayData);
    return days[dayData.indexOf(modeDayInt)];
  }

  const getMinDay = dayData => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const minDayInt = Math.min(...dayData);
    return days[dayData.indexOf(minDayInt)];
  }

  const getCityData = cityData => {
    return Object.keys(cityData).reduce((results, city) => {
      if (cityData[city] > results.count) {
        results.name = city;
        results.count = cityData[city];
      }
      return results;
    }, {name: '', count: 0});
  }

  const convertTime = (seconds) => {
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor(seconds % 86400 / 3600),
      minutes: Math.floor(seconds % 3600 / 60),
      seconds: Math.floor(seconds % 3600 % 60)
    }
  }

  const numberOfTrips = data.numberOfTrips;
  
  const distanceTraveled = data.totalDistanceTraveled.toFixed(2);
  const longestRideDistance = data.longestRide.distance.toFixed(2);
  const longestRideCity = data.longestRide.city;

  const timeWaiting = convertTime(data.timeSpentWaiting);
  const timeRiding = convertTime(data.timeSpentRiding);

  const averageRideDistance = (distanceTraveled / numberOfTrips).toFixed(2);
  const averageRideWaiting = convertTime(data.timeSpentWaiting / numberOfTrips);
  const averageRideRiding = convertTime(data.timeSpentRiding / numberOfTrips);

  const modeDay = getModeDay(data.tripsPerDay);
  const minDay = getMinDay(data.tripsPerDay);

  const modeCityData = getCityData(data.tripsPerCity);
  const modeCityName = modeCityData.name;
  const modeCityPercentage = (modeCityData.count / numberOfTrips).toFixed(4) * 100;

  const cityBarData = generateCityBarData(data.tripsPerCity);
  const dayBarData = generateDayBarData(data.tripsPerDay);

  return (
    <div>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <Trips numberOfTrips={numberOfTrips} />
            </Col>
            <Col md={6}>
              <Distance 
                distanceTraveled={distanceTraveled}
                averageRideDistance={averageRideDistance}
                longestRideDistance={longestRideDistance}
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Time 
                timeWaiting={timeWaiting}
                timeRiding={timeRiding}
                averageRideWaiting={averageRideWaiting} 
                averageRideRiding={averageRideRiding}
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={6}>
              <h3>Rides by Day</h3>
              <h3>You most often take rides on {modeDay}.</h3>
              <h3>You least often take rides on {minDay}.</h3>
              <div>
                <Bar 
                  data={dayBarData} 
                  height={400} 
                  width={400} 
                />
              </div>
            </Col>
            <Col md={6}>
            <div>
              <h3>Rides by City</h3>
              <h3>You most often take rides in {modeCityName}</h3>
              <h3>{modeCityPercentage}% of your rides take place there</h3>
              <div>
                <Bar 
                  data={cityBarData}
                  height={400}
                  width={400}
                />
              </div>
            </div>
            </Col>
          </Row>
        </Grid>      
    </div>
  )
}

export default Stats;
