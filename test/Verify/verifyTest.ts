/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import Calculator from '../../app/Verify/verify';

describe('Calculator', () => {
    var subject : Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together and result in 5', (done) => {
            var result : number = subject.add(2, 3);
            expect(result).to.equals(5);
            done();
        });

        it('should add two numbers together and result in 6', (done) => {
            var result : number = subject.add(3, 3);
            expect(result).to.equals(6);
            done();
        });
    });
});

