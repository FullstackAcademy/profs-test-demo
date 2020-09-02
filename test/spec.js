//const assert = require('assert');
const { expect } = require('chai');
const fizzBuzz = require('../fizzBuzz');

const results = fizzBuzz(15);

/*
assert(results[0] === 1);
assert(results[2] === 'fizz', 'expected 3rd item to be fizz');
assert(results[4] === 'buzz', 'expected 5th value to be buzz');
assert(results[9] === 'buzz', 'expected 10th value to be buzz');
assert(results[14] === 'fizzBuzz', 'expected fizzBuzz for 15th value');
*/

describe('eql', ()=> {
  it('goes into nested objects?', ()=> {
    expect(
      { fizz: { buzz: 42, quq: { zorb: true}}}
    ).to.eql(
      { fizz: { buzz: 42, quq: { zorb: true}}}
    );
  });
});
describe('fizzBuzz', ()=> {
  describe('fizzBuzz(5)', ()=> {
    it('to equal [1, 2, "fizz", 4, "buzz"]', ()=> {
      expect(fizzBuzz(5)).to.eql([ 1, 2, 'fizz', 4, 'buzz']);
    });
  });
  describe('fizzBuzz(15)', ()=> {
    it('has a length of 15', ()=> {
      expect(results.length).to.equal(15);
    });
    it('mods of 3 are fizz', ()=> {
      expect(results[2]).to.equal('fizz');
    });
    it('mods of 5 are buzz', ()=> {
      expect(results[9]).to.equal('buzz');
    });
    it('mods of 3 and 5 are fizzBuzz', ()=> {
      expect(results[14]).to.equal('fizzBuzz');
    });
    it('everything else is just the number', ()=> {
      expect(results[7]).to.equal(8);
    });
  });
});

console.log('SUCCESS');
