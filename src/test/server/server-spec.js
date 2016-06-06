const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../../server');

chai.use(chaiHttp);

describe('Server Functionality', () => {

  it('should exist', done => {
    expect(!!server).to.equal(true);
    done();
  });

  it('should have the correct config settings', done => {
    expect(server.settings.env).to.equal('development');
    done();
  });

  it('should serve static files on a GET to /', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        expect(res.ok).to.equal(true);
        expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
        done();
      });
  });

});
