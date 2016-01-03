var expect = require('chai').expect
  , foo = 'bar'
  , beverages = {tea: ['chai', 'motcha', 'oolong']};



   expect(foo).to.equal('bar');

   

describe ('A basic test for string var foo', function() {
  it('should pass when everything is okay', function(){
     expect(foo).to.equal('bar');
     expect(foo).to.be.a('string');
     expect(foo).to.have.length(3);
  });
});

describe ('A basic test for object var beverages', function() {
  it('should pass when everything is okay', function(){
     expect(beverages).to.be.a('object');
     expect(beverages).to.have.property('tea').with.length(3);

  });
});
