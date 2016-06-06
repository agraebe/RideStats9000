const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../../server');
const authController = require('../../server/resources/auth/authController');
const authRouter = require('../../server/resources/auth/authRouter');

chai.use(chaiHttp);

describe('Auth Controller Functionality', () => {

  it('should exist', done => {
    expect(!!authController).to.equal(true);
    done();
  });

});

describe('Auth Router Functionality', () => {

  it('should exist', done => {
    expect(!!authRouter).to.equal(true);
    done();
  });

  it('should respond with a redirect URI on a GET to /api/auth/login', done => {
    chai.request(server)
      .get('/api/auth/login')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        expect(res.ok).to.equal(true);
        expect(res.body.url.split('?')[0]).to.equal('https://login.uber.com/oauth/authorize');
        done();
      });
  });

});
