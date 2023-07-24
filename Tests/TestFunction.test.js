const validations = require('./functions');
const request = require('supertest');
const cors = require('../controllers/controler');
const app = require('../app');
const axios = require('axios');
const listUsers = require('../controllers/controler');
const express = require('express');
// const app = express()
const UserR = require('../Routes/router');
test('check if the emailvalid', () => {
    expect(validations.validateEmail('sss@gmail.com')).toBe(true);
});
test('check if the email contain @', () => {
    expect(validations.validateEmail('sssgmail.com')).toBe(false);
});
test('check if the name is correct', () => {
    expect(validations.validateName('kkk')).toBe(true);
});
test('check if the name is correct', () => {
    expect(validations.validateName('88')).toBe(false);
});
// describe('GET /api/getAll', () => {
//     it('responds with a list of users', async () => {
//       const response = await request(app.js).get('/api/getAll');
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual(listUsers);
//     });
//   });

// app.use('/UserRoute', UserR)
// describe('Testing get', () => {
//     it(':heart_eyes:', async () => {
//         const response = await request(app).get('/getAll')
//         expect(response.status).toBe(404);
//     });
// });
