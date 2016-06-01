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

  generateCityBarData () {
    const cityData = this.state.data.tripsPerCity;
    const labels = Object.keys(cityData);
    const data = labels.map(city => cityData[city])
    const chartData = {
      labels,
      datasets: {
        label: 'Trips Per City',
        fillColor: 'rgba(52, 152, 219, .28)',
        borderWidth: 10,
        hoverBackgroundColor: '#2980b9',
        hoverBorderColor: '#2980b9',
        data
      }
    }
    console.log(chartData);
    return chartData;
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
      })
  }
  render() {
    return (
      <div>
        <h1>UberStats</h1>
        <button onClick={this.handleLoginClick}>Login</button>
        <button onClick={this.handleDataRequest}>Retrieve Data</button>
        {this.state.data ? <Bar data={this.generateCityBarData()} /> : null}
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));