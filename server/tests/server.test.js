const expect = require('expect'),
      request = require('supertest'),
      {app} = require('./../server'),
      {Todo} = require('./../models/todo');


describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      
  });
});
