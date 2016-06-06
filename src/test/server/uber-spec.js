const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../../server');
const uberClient = require('../../server/resources/uber/uberClient');
const uberRouter = require('../../server/resources/uber/uberRouter');
const uberController = require('../../server/resources/uber/uberController');
const uberUtils = require('../../server/resources/uber/uberUtils');

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

});

