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
 const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU3VuIEF1ZyAwNyAyMDIyIDA5OjA0OjI1IEdNVC0wNzAwIChQYWNpZmljIERheWxpZ2h0IFRpbWUpIiwidXNlcklkIjoiNjJlZmUyNjAyZjU5NjFhNzAwMDM0OWQxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU5ODg4MjY1fQ.EsLCEQrPveGO6TOOttxtew7LD2uHqSUQ55vRPXdK22Y"
  describe('/GET ', () => {
      it('it should GET all the books', (done) => {
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
  });
  //test for posts
  describe('/Post ', () => {
    it('it should post all the books', (done) => {
      chai.request(server)
          .post('/movies')
          .set('authorization','Bearer ' + token)
          .end((err, res) => {
              console.log(res)
                res.should.have.status(200);
              
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

