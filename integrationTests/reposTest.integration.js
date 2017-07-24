//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
// process.env.PORT = 80
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
let expect = require('chai').expect
chai.use(chaiHttp);


// describe('start', () => {
//     it('should run test', ()=> {
//         expect(true).to.equal(true);
//     });
// });

describe('Repo Controller', ()=> {

    // before(done=> {
    //         console.log('before')
    //         done();
    // });
// before (done) 
//   var app = require(__dirname + '/../src/app')
//   app.listen(3000, done)


    it('should add the repo', (done)=> {
        chai.request(server)
            .post('api/repos')
            // .send({name: 'test', path: '~/testpath'})
            .end((err, res) => {
                console.log(err);
                res.should.have.status(200);

                done();
            });
    });
});


//   describe('/GET book', () => {
//       it('it should GET all the books', (done) => {
//         chai.request(server)
//             .get('/book')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//               done();
//             });
//       });
//   });
