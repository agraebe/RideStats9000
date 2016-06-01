import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Bar } from 'react-chartjs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDataRequest = this.handleDataRequest.bind(this);
  }

  componentDidMount() {
    
  }

  handleLoginClick () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/auth/login'
    })
      .done((data) => {
        window.location.href = data.url;
      })
      .fail((err) => {
        console.log(err);
      })
  }

  handleDataRequest () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/uber/statistics'
    })
      .done((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .fail((err) => {
        console.log(err);
      });
  }

  generateCityBarData () {
    const cityData = this.state.data.tripsPerCity;
    const labels = Object.keys(cityData);
    const data = labels.map(city => cityData[city])
    const chartData = {
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
    console.log(chartData);
    return chartData;
  }

  convertTime (seconds) {
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor(seconds % 86400 / 3600),
      minutes: Math.floor(seconds % 3600 / 60),
      seconds: Math.floor(seconds % 3600 % 60)
    }
  }

  render() {
    if (!this.state.data) {
      return (
        <div>
          <h1>UberStats</h1>
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleDataRequest}>Retrieve Data</button>
        </div>
      );
    }
    const distanceTraveled = this.state.data.totalDistanceTraveled.toFixed(2);
    const numberOfTrips = this.state.data.numberOfTrips;
    const longestRide = this.state.data.longestRide.distance.toFixed(2);
    const longestRideCity = this.state.data.longestRide.city;
    const timeWaiting = this.convertTime(this.state.data.timeSpentWaiting);
    const timeRiding = this.convertTime(this.state.data.timeSpentRiding);
    return (
      <div>
        <h1>UberStats</h1>
        <button onClick={this.handleLoginClick}>Login</button>
        <button onClick={this.handleDataRequest}>Retrieve Data</button>
        <p>You've traveled {distanceTraveled} miles during {numberOfTrips} Uber rides.</p>
        <p>Your longest ride was {longestRide} miles in {longestRideCity}</p>
        <p>You've spent {timeWaiting.days} days, {timeWaiting.hours} hours, {timeWaiting.minutes} minutes, and {timeWaiting.seconds} seconds waiting for Ubers.</p>
        <p>You've spent {timeRiding.days} days, {timeRiding.hours} hours, {timeRiding.minutes} minutes, and {timeRiding.seconds} seconds riding in Ubers.</p>
        <Bar data={this.generateCityBarData()} height={400} width={400} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));