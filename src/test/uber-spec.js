const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../server');
const uberClient = require('../server/resources/uber/uberClient');
const uberRouter = require('../server/resources/uber/uberRouter');
const uberController = require('../server/resources/uber/uberController');
const uberUtils = require('../server/resources/uber/uberUtils');

chai.use(chaiHttp);

describe('Uber Client Functionality', () => {

  it('should exist', done => {
    expect(!!uberClient).to.equal(true);
    done();
  });

});

describe('Uber Router Functionality', () => {

  it('should exist', done => {
    expect(!!uberRouter).to.equal(true);
    done();
  });

});

describe('Uber Controller Functionality', () => {

  it('should exist', done => {
    expect(!!uberController).to.equal(true);
    done();
  });

});

describe('Uber Utils Functionality', () => {


  it('should exist', done => {
    expect(!!uberUtils).to.equal(true);
    done();
  });

  it('should use updateTripsPerCity to correctly alter tripsPerCity when provided a new city', done => {
    const initial = {};
    const next = {
      start_city: {
        display_name: 'San Francisco'
      }
    }
    expect(uberUtils.updateTripsPerCity(initial, next)['San Francisco']).to.equal(1);
    done();
  });

  it('should use updateTripsPerCity to correctly update tripsPerCity when provided an existant city', done => {
    const initial = {
      'San Francisco': 1,
    };
    const next = {
      start_city: {
        display_name: 'San Francisco'
      }
    }
    expect(uberUtils.updateTripsPerCity(initial, next)['San Francisco']).to.equal(2);
    done();
  });


});

