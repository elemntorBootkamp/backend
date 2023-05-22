const validations=require('./functions');
const cors=require('../controllers/controler')
const app = require('../app');
const axios = require('axios');


test('check if the emailvalid',()=>{
    expect(validations.validateEmail("sss@gmail.com")).toBe(true);
}) 
test('check if the email contain @',()=>{
    expect(validations.validateEmail("sssgmail.com")).toBe(false);
})
test('check if the name is correct',()=>{
    expect(validations.validateName("kkk")).toBe(true);
})
test('check if the name is correct',()=>{
    expect(validations.validateName("88")).toBe(false);
})
describe('CORS middleware', () => {
    it('should allow cross-origin requests', async () => {
      const response = await request(app)
        .get('/api/data')
        .set('Origin', 'http://localhost:3000');
      expect(response.status).toBe(200);
      expect(response.header['access-control-allow-origin']).toBe('*');
      expect(response.body.message).toBe('Hello, world!');
    });
  });

  ///
  test('should return a 404 error if the user with the given name is not found', () => {
    const mockReq = { params: { myName: 'Charlie' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    getById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toHaveBeenCalledWith("WE DONT FIND THIS USER:face_with_rolling_eyes::face_with_rolling_eyes::face_with_rolling_eyes:");
  });
  test('should return a 200 error if the user with the given name is found', () => {
    const mockReq = { params: { myName: 'shifra' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    getById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({"date": "0000", "email": "mmm", "name": "shifra", "phone": "0000"});
  });
  test('should return a 200 error if the user dalate with the given name is not found', () => {
    const mockReq = { params: { my: 'shifra' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    Delete(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(":sleepy::sleepy::sleepy: WE SO SAD THAT YOU LEAV");
  });