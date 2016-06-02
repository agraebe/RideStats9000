import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Bar } from 'react-chartjs';
import Nav from './nav.jsx';
import Stats from './stats.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.requestUserStatistics = this.requestUserStatistics.bind(this);
  }

  componentDidMount() {
    if (window.location.hash === '#_') {
      this.requestUserStatistics();
    }
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
      });
  }

  requestUserStatistics () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/uber/statistics'
    })
      .done((response) => {
        this.setState({ data: response.data, loggedIn: true });
      })
      .fail((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Nav handleLoginClick={this.handleLoginClick} loggedIn={this.state.loggedIn}/>
        {this.state.data ? <Stats data={this.state.data}/> : null }
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));