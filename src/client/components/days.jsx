import React from 'react';
import { Panel } from 'react-bootstrap';
import { Bar} from 'react-chartjs';

const generateDayBarData = dayData => {
  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const data = dayData;
  const dayBarData = {
    labels,
    datasets: [{
      label: 'Trips Per Day',
      fillColor: ['#970015', '#149C81', '#006551', '#F4A51F', '#C88107', '#E81E3A', '#BF0720'],
      borderWidth: 10,
      hoverBackgroundColor: '#2980b9',
      hoverBorderColor: '#2980b9',
      data
    }]
  }
  return dayBarData;
}

const days = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

const getModeDay = dayData => {
  const modeDayInt = Math.max(...dayData);
  return days[dayData.indexOf(modeDayInt)];
}

const getMinDay = dayData => {
  const minDayInt = Math.min(...dayData);
  return days[dayData.indexOf(minDayInt)];
}

const Days = ({ dayData }) => {
  const modeDay = getModeDay(dayData);
  const minDay = getMinDay(dayData);
  const dayBarData = generateDayBarData(dayData);
  const title = (<h3><i className="fa fa-calendar" aria-hidden="true"></i> Rides by Day</h3>);
  return(
    <Panel className="panel-primary" header={title}>
      <h3 className="text-center">You ride most often on <strong>{modeDay}</strong></h3>
      <h3 className="text-center"><small>You ride least often on <strong>{minDay}</strong></small></h3>
      <div className="text-center">
        <Bar 
          data={dayBarData}
          options={{responsive: true}}
          height={400} 
          width={400} 
        />
      </div>
    </Panel>
  )
}

export default Days;
