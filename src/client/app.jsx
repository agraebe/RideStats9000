import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Bar } from 'react-chartjs';
import Nav from './components/nav.jsx';
import Stats from './components/stats.jsx';
import Login from './components/login.jsx';
import Loading from './components/loading.jsx';
import Footer from './components/footer.jsx';
import { generateDemoData } from './utils';

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
        if (window.location.hash === '#/logout') {
          return;
        }
        window.history.pushState(null, '#/stats', '#/stats');
        this.setState({ data: response.data, loading: false })
      })
      .fail(err => {
        this.handleLogout();
      });
  }

  requestDemoStatistics() {
    window.history.pushState(null, '#/demo', '#/demo');
    this.setState({loggedIn: true, loading: true, demo: true});
    setTimeout(() => {
      if (window.location.hash === '#/logout') {
        return;
      }
      this.setState({
        loading: false,
        data: generateDemoData()
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
        {this.state.data ? <Stats data={this.state.data}/> : this.state.loading ? <Loading /> : <Login handleLoginClick={this.handleLoginClick} handleDemoClick={this.handleDemoClick} /> }
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));