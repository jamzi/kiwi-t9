const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('suggestions api', () => {
  it('should return 400 when posting empty body', done => {
    chai
      .request(server)
      .post('/suggestions')
      .send({ numbers: '' })
      .end((err, res) => {
        res.should.have.status(400);
        res.error.text.should.be.eql(
          'Numbers for generating words are required'
        );
        done();
      });
  });
  it('should return 200 when posting a valid body', done => {
    chai
      .request(server)
      .post('/suggestions')
      .send({ numbers: '123' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.be.eql([
          'ad',
          'ae',
          'af',
          'bd',
          'be',
          'bf',
          'cd',
          'ce',
          'cf'
        ]);
        done();
      });
  });
});
