// const assert = require('assert');
// const app = require("../app");
// // const app1 = require("../app");
// const TEST_TIMEOUT = 50000;

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU3VuIEF1ZyAwNyAyMDIyIDAwOjMyOjI3IEdNVCswMjAwIChDZW50cmFsIEV1cm9wZWFuIFN1bW1lciBUaW1lKSIsInVzZXJJZCI6IjYyZWVkZTY0ZmNkODNiMGRjMDM1YWIzZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjU5ODI1MTQ3fQ.W0KyKgsvn1LD8ZMVHNYzhlF12ov1Qvu-LZ2PZYdhmhM"

// describe("test", () => {
//     it("1 Negative: It should not post with out the required fields", async (done) => {
//         console.log("coming here")
//         const facility = {
//             first_name: "facilityId",
//             last_name: "test",
//         };
//         console.log(app.route)
//         const response = await request(app)
//             .post("/movies")
//             .send(facility)
//             .set("Authorization", `bearer ${token}`);
//             console.log(response)
//         expect(response.status).toEqual(400);
//         done();
//         },
//         TEST_TIMEOUT
//     );
// })



process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//let Book = require('../app/models/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const { response } = require("express");
const { authorization } = require("../services/auth.service");
let should = chai.should();


chai.use(chaiHttp);


const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEF1ZyAwOCAyMDIyIDA0OjQ3OjUxIEdNVCswNTAwIChQYWtpc3RhbiBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6IjYyZWZlZDgxYmM2OWIyZmM5YTg4YWY2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTkxNjA3MX0.UZ4bOfZW5xHTwlcAxdWiNXVzTNwGCnUgN7ENgURcTco"
  describe('/testing movies controller ', () => {
      it('it should GET all the User', (done) => {
        const userdata = {
            "email": "umertayyeb223@gmail.com",
            "password": "1122"
        }
        chai.request(server)
            .get('/login')
            .send(userdata)
           // .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(401);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('it should GET all the User', (done) => {
        const userdata = {
            "email": "umertayyeb4545454223@gmail.com",
            "password": "1122"
        }
        chai.request(server)
            .get('/login')
            .send(userdata)
            //  .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(200);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('it should GET all the User', (done) => {
        const userdata = {
            "email": "",
            "password": "1122"
        }
        chai.request(server)
            .get('/login')
            .send(userdata)
            //  .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('it should GET all the User', (done) => {
        const userdata = {
            "email": "umertayyeb4545454223@gmail.com",
            "password": ""
        }
        chai.request(server)
            .get('/login')
            .send(userdata)
            //  .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('it should GET all the User', (done) => {
        const userdata = {
            "email": "",
            "password": ""
        }
        chai.request(server)
            .get('/login')
            .send(userdata)
            //  .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
    });