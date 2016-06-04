import React from 'react';
import { Panel, Col, Row } from 'react-bootstrap';
import { Bar } from 'react-chartjs';

const generateCityBarDataColors = (data) => {
  const colors = ['#970015', '#149C81', '#006551', '#F4A51F', '#C88107', '#E81E3A', '#BF0720'];
  return data.map(() => {
    const color = colors.shift();
    colors.push(color);
    return color;
  });
}
const generateCityBarData = cityData => {
  const labels = Object.keys(cityData);
  const data = labels.map(city => cityData[city]);
  const colors = generateCityBarDataColors(data);
  const cityBarData = {
    labels,
    datasets: [{
      label: 'Trips Per City',
      backgroundColor: colors,
      fillColor: colors,
      borderWidth: 10,
      hoverBackgroundColor: '#149c82',
      hoverBorderColor: '#149c82',
      data
    }]
  }
  return cityBarData;
}

const getModeCityData = cityData => {
  return Object.keys(cityData).reduce((results, city) => {
    if (cityData[city] > results.count) {
      results.name = city;
      results.count = cityData[city];
    }
    return results;
  }, {name: '', count: 0});
}

const Cities = ({ cityData, numberOfTrips }) => {
  const modeCityData = getModeCityData(cityData);
  const modeCityName = modeCityData.name;
  const modeCityPercentage = (modeCityData.count / numberOfTrips).toFixed(4) * 100;
  const cityBarData = generateCityBarData(cityData);
  const title = (<h3><i className="fa fa-map" aria-hidden="true"></i> Rides by City</h3>);
  return(
    <Panel className="panel-primary" header={title}>
      <h3 className="text-center">You take Uber most often in <strong>{modeCityName}</strong></h3> 
      <h3 className="text-center"><small><strong>{modeCityPercentage}%</strong> of your rides take place there</small></h3>
      <div className="text-center">
        <Bar 
          data={cityBarData}
          options={{responsive: true}}
          height={400}
          width={400}
        />
      </div>
    </Panel>
  )
}

export default Cities;

