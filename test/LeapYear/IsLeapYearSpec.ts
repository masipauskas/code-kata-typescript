/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import LeapYear from '../../app/LeapYear/leapYear';
var isLeapYear = LeapYear.isLeapYear;

describe('isLeapYear', () => {
    describe('non-leap years:', () => {
        it('should detect 2000 as typical common year', (done) => {
            expect(isLeapYear(2001)).to.equals(false);
            done();
        });

        it('should detect 1900 as atypical common year', (done) => {
            expect(isLeapYear(1900)).to.equals(false);
            done();
        });
    });

    describe('leap years:', () => {
        it('should detect 1996 as typical leap year', (done) => {
            expect(isLeapYear(1996)).to.equals(true);
            done();
        });

        it('should detect 2000 as atypical leap year', (done) => {
            expect(isLeapYear(2000)).to.equals(true);
            done();
        });
    });
});

