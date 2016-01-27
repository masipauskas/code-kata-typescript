/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import PhoneNumbers from '../../app/PhoneNumbers/phoneNumbers';

describe('Calculator', () => {
    var subject : PhoneNumbers;

    beforeEach(function () {
        subject = new PhoneNumbers();
    });

    describe('#isConsistent', () => {
        it('should be consistent when only one phone number is provided', (done) => {
            var result : boolean = subject.isConsistent(["97 625 992"]);
            expect(result).to.equals(true);
            done();
        });

        it('should be consistent when only no phone numbers are provided', (done) => {
            var result : boolean = subject.isConsistent([]);
            expect(result).to.equals(true);
            done();
        });

        it('should be consistent when multiple phone numbers are provided', (done) => {
            var result : boolean = subject.isConsistent(["97 625 992", "91 12 54 26"]);
            expect(result).to.equals(true);
            done();
        });

        it('should be in consistent when multiple phone numbers are provided and list is inconsistent', (done) => {
            var result : boolean = subject.isConsistent(["97 625 992", "91 12 54 26", "911"]);
            expect(result).to.equals(false);
            done();
        });
    });
    /*

     "isConsistent" should "be consistent when only one phone number is provided" in {
     isConsistent(Seq(PhoneNumber("Alice", "97 625 992"))) shouldEqual true
     }

     "isConsistent" should "be consistent when only no phone numbers are provided" in {
     isConsistent(Seq.empty) shouldEqual true
     }

     "isConsistent" should "be consistent when multiple phone numbers are provided" in {
     isConsistent(Seq(PhoneNumber("Alice", "97 625 992"), PhoneNumber("Bob", "91 12 54 26"))) shouldEqual true
     }

     "isConsistent" should "be in consistent when multiple phone numbers are provided and list is inconsistent" in {
     isConsistent(Seq(
     PhoneNumber("Alice", "97 625 992"),
     PhoneNumber("Bob", "91 12 54 26"),
     PhoneNumber("Emergency", "911"))) shouldEqual false
     }

    */
});

