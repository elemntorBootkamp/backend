const validations=require('./functions');
const cors=require('../controllers/controler')
const app = require('../app');

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