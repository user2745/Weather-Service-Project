import chai from 'chai';
import {default as chaiHttp, request} from "chai-http";
import app from './app';

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return welcome message when no params provided', (done) => {
    request.execute(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status', 'Welcome to the Weather API');
        done();
      });
  });
});

describe('GET / (lat/lon)', () => {
  it('should return weather data for given lat/lon', (done) => {
    request.execute(app)
      .get('/?lat=39.7456&lon=-97.0892')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('temperature');
        expect(res.body).to.have.property('shortForecast');
        expect(res.body).to.have.property('temperatureType');
        done();
      });
  });
});
