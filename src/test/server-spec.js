const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../server');

chai.use(chaiHttp);

describe('Basic Server Functionality', function () {

  it('should export correctly from ../server/index.js', function (done) {
    expect(!!server).to.equal(true);
    done();
  });

  it('should have the correct server config', function (done) {
    expect(server.settings.env).to.equal('development');
    done();
  });

  it('should serve static files on a GET to /', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        expect(res.ok).to.equal(true);
        expect(res.headers['content-type']).to.equal('text/html; charset=UTF-8');
        done();
      });
  });

});