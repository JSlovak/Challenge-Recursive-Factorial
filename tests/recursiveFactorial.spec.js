var chai = require("chai");
var expect = chai.expect;
var recursiveFactorial = require("../recursiveFactorial");

describe("Recursive Factorial", function(){

 it("should be a function", function(){
    expect(recursiveFactorial).to.be.a("function");
  });

   it("should return the parameters factorial", function(){
    expect(recursiveFactorial(4)).to.be.equal(24);
    expect(recursiveFactorial(5)).to.be.equal(120);
    expect(recursiveFactorial(6)).to.be.equal(720);
  });

   //Ex. factorial(4) //4 * 3 * 2 * 1 = 24
   //Ex. factorial(5) //5 * 4 * 3 * 2 * 1 = 120
   //Ex. factorial(6) //6 * 5 * 4 * 3 * 2 * 1 = 720
});