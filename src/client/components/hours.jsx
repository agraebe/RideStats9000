import React from 'react';
import { Panel } from 'react-bootstrap';
import { Line } from 'react-chartjs';

const hours = [
  "Midnight", 
  "1 a.m.",
  "2 a.m.",
  "3 a.m.",
  "4 a.m.",
  "5 a.m.",
  "6 a.m.",
  "7 a.m.",
  "8 a.m.",
  "9 a.m.",
  "10 a.m.",
  "11 a.m.",
  "12 p.m.",
  "1 p.m.",
  "2 p.m.",
  "3 p.m.",
  "4 p.m.",
  "5 p.m.",
  "6 p.m.",
  "7 p.m.",
  "8 p.m.",
  "9 p.m.",
  "10 p.m.",
  "11 p.m.",
];

const generateHourLineData = hourData => {
  const labels = hours;
  const data = hourData;
  const dayLineData = {
    labels,
    datasets: [{
      label: 'Trips By Hour',
      fillColor: '#006551',
      strokeColor: '#006551',
      pointColor: '#149C81',
      pointStrokeColor: '#006551',
      pointHighlightFill: '#8EF0DD',
      pointHighlightStroke: '#149C81',
      data,
    }],
  };
  return dayLineData;
};

const getModeHourRange = hourData => {
  const modeHourInt = Math.max(...hourData);
  const modeHourIndex = hourData.indexOf(modeHourInt);
  return hours[modeHourIndex] + ' and ' + (hours[modeHourIndex + 1] || hours[0]);
};

const getMinHourRange = hourData => {
  const minHourInt = Math.min(...hourData);
  const minHourIndex = hourData.indexOf(minHourInt);
  return hours[minHourIndex] + ' and ' + (hours[minHourIndex + 1] || hours[0]);
};

const Hours = ({ hourData }) => {
  const modeHourRange = getModeHourRange(hourData);
  const minHourRange = getMinHourRange(hourData);
  const graphData = generateHourLineData(hourData);
  const graphOptions = { responsive: true, pointHitDetectionRadius: 5, pointDot: true};
  const title = (<h3><i className="fa fa-clock-o" aria-hidden="true"></i> Rides by Hour</h3>);
  return (
    <Panel className="panel-primary" header={title} body>
      <h3 className="text-center">
        You ride most often between <strong>{modeHourRange}</strong>
      </h3>
      <h3 className="text-center">
        <small>You ride least often between <strong>{minHourRange}</strong></small>
      </h3>
      <div className="text-center">
        <Line
          data={graphData}
          options={graphOptions}
          height={200}
          width={400}
        />
      </div>
    </Panel>
  );
};

export default Hours;
