import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Bar } from 'react-chartjs';
import Nav from './nav.jsx';
import Stats from './stats.jsx';
import LoginReminder from './loginReminder.jsx';
import Loading from './loading.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: false,
      loggedIn: false,
      demo: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.requestUserStatistics = this.requestUserStatistics.bind(this);
    this.requestDemoStatistics = this.requestDemoStatistics.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    // Temp for testing
    if (window.location.hash === '#/loading') {
      this.requestUserStatistics();
    }
  }

  handleLoginClick () {
    if (this.state.loggedIn) {
      return this.handleLogout();
    }
    $.ajax({ type: 'GET', url: '/api/auth/login' })
      .done(data => window.location.href = data.url)
      .fail(err => console.log(err));
  }

  handleDemoClick () {
    this.requestDemoStatistics();
  }

  handleLogout () {
    window.history.pushState(null, '#/logout', '#/logout');
    this.setState({ loggedIn: false, loading: false, data: null, demo: false});
  }

  requestUserStatistics () {
    this.setState({loggedIn: true, loading: true});
    $.ajax({ type: 'GET', url: '/api/uber/statistics' })
      .done(response => {
        window.location.hash = "#/stats";
        this.setState({ data: response.data, loading: false })
      })
      .fail(err => {
        this.handleLogout();
        console.log(err);
      });
  }

  requestDemoStatistics() {
    this.setState({loggedIn: true, loading: true, demo: true});
    window.history.pushState(null, '#/demo', '#/demo');
    setTimeout(() => {
      this.setState({
        loading: false,
        data: {
          numberOfTrips: 185,
          tripsPerCity: {
            "San Francisco": 140,
            "Los Angeles": 39,
            "Portland": 4,
            "New Orleans": 2
          },
          timeSpentRiding: 102370,
          timeSpentWaiting: 47377,
          longestRide: {
            city: "Los Angeles",
            distance: 24.662265066
          },
          totalDistanceTraveled: 399.1359926652999,
          tripsPerDay: [38, 21, 13, 23, 20, 15, 55]
        }
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Nav 
          handleLoginClick={this.handleLoginClick}
          handleDemoClick={this.handleDemoClick}
          loading={this.state.loading}
          loggedIn={this.state.loggedIn}
          demo={this.state.demo}
        />
        {this.state.data ? <Stats data={this.state.data}/> : this.state.loading ? <Loading /> : <LoginReminder /> }
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));