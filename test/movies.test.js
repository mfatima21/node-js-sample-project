//During the test the env variable is set to test
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
//Our parent block
// //describe('Books', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         Book.remove({}, (err) => { 
//            done();           
//         });        
//     });
 /*
  * Test the /GET route
  */
 const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEF1ZyAwOCAyMDIyIDA0OjQ3OjUxIEdNVCswNTAwIChQYWtpc3RhbiBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6IjYyZWZlZDgxYmM2OWIyZmM5YTg4YWY2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTkxNjA3MX0.UZ4bOfZW5xHTwlcAxdWiNXVzTNwGCnUgN7ENgURcTco"
  describe('/testing movies controller ', () => {
      it('Testing User', (done) => {
        chai.request(server)
            .get('/movies')
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(200);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing', (done) => {
        const movies = {
          "title": "Shawshank Redemption",
          "cast": ["62ed3f114ae30f5ef3890e02"],
          "genre": "Action"
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(201);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing Title', (done) => {
        const movies = {
          "title": "",
          "cast": ["62ed3f114ae30f5ef3890e02"],
          "genre": "Action"
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing Cast', (done) => {
        const movies = {
          "title": "Shawshank Redemption",
          "cast": [],
          "genre": "Action"
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(201);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing Cast array', (done) => {
        const movies = {
          "title": "Shawshank Redemption",
          "cast": "62ed3f114ae30f5ef3890e02",
          "genre": "Action"
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing Genre', (done) => {
        const movies = {
          "title": "Shawshank Redemption",
          "cast": ["62ed3f114ae30f5ef3890e02"],
          "genre": ""
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            .set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(400);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
      it('Testing Token', (done) => {
        const movies = {
          "title": "Shawshank Redemption",
          "cast": ["62ed3f114ae30f5ef3890e02"],
          "genre": "Action"
        }
        chai.request(server)
            .post('/movies')
            .send(movies)
            //.set('authorization','Bearer ' + token)
            .end((err, res) => {
                console.log(res)
                  res.should.have.status(401);
                
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
  });

// const assert = require('assert'); 
// var expect  = require('chai').expect;
// var request = require('request');
// const movieModel = require('../models/movie.model');


// it('Movies.model Test', function(done) {
//     request('http://localhost:3000/movies' , async function(error, response, body) {
//         console.log("coming here")
//         const facility = {
//             title: "facilityId",
//             cast: "test",
//         };
//         expect(body).to.equal('title,cast');
//         console.log(movieModel.route)
//         const test = await request(movieModel)
//             .post("/movies")
//             .send(facility)
//             console.log(test)
//         expect(response.status).toEqual(400);
//         done();

//     });
// });

