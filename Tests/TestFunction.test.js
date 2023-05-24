const validations=require('./functions');

test('check if the emailvalid',()=>{
    expect(validations.validateEmail('sss@gmail.com')).toBe(true);
});
 
test('check if the email contain @',()=>{
    expect(validations.validateEmail('sssgmail.com')).toBe(false);
});

test('check if the name is correct',()=>{
    expect(validations.validateName('kkk')).toBe(true);
});

test('check if the name is correct',()=>{
    expect(validations.validateName('88')).toBe(false);
});
