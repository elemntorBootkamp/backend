const validations = require('./functions');
//const cors=require('../controllers/controler');
const app = require('../app');
const axios = require('axios');

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
