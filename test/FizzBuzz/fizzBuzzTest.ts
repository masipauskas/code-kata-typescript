/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import Buzzer from '../../app/FizzBuzz/fizzBuzz'

describe('Buzzer', () =>{
    var buzzer = new Buzzer()

    beforeEach(() => {
        buzzer = new Buzzer();
    })

    describe("#run", () => {
        it("should return empty array for 0 elements", (done) => {
            var result = buzzer.run(0);
            expect(result).to.deep.equal([]);
            done();
        });

        it("should return expected array for 7 elements", (done) => {
            var result = buzzer.run(7);
            expect(result).to.deep.equal(["1", "2", "Fizz", "4", "Buzz", "Fizz", "Whizz"]);
            done();
        });

        it("should return expected array for 20 elements", (done) => {
            var result = buzzer.run(20);
            expect(result).to.deep.equal([
                "1", "2", "Fizz", "4", "Buzz", "Fizz", "Whizz", "8", "Fizz", "Buzz",
                "11", "Fizz", "13", "Whizz", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz"
            ]);
            done();
        })
    });
});