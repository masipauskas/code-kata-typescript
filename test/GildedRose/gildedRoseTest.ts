/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import gildedRose from '../../app/GildedRose/gildedRose'
var Item = gildedRose.Item;
var GildedRose = gildedRose.GildedRose;

describe('GildedRose', () => {
    describe('#updateState', () => {
        it('should decrease normal items quality', (done) => {
            var item = new Item("Temp Book", 15, 10);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Temp Book", 14, 9) ]);
            done();
        });

        it('should decrease quality at twice the speed when sellIn is 0', (done) => {
            var item = new Item("Temp Book", 5, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Temp Book", 3, 0) ]);
            done();
        });

        it('should never decrease the quality bellow 0', (done) => {
            var item = new Item("Temp Book", 1, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Temp Book", 0, 0) ]);
            done();
        });

        it('should increase aged items quality', (done) => {
            var item = new Item("Aged Brie", 15, 10);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Aged Brie", 16, 9) ]);
            done();
        });

        it('should never increase aged items quality above 50', (done) => {
            var item = new Item("Aged Brie", 50, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Aged Brie", 50, 0) ]);
            done();
        });

        it('should never decrease Conjured items quality bellow 0', (done) => {
            var item = new Item("Conjured", 1, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Conjured", 0, 0) ]);
            done();
        });

        it('should decrease Conjured items quality bellow twice the rate of the normal one when normal', (done) => {
            var item = new Item("Conjured", 15, 10);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Conjured", 13, 9) ]);
            done();
        });

        it('should decrease Conjured items quality bellow twice the rate of the normal one when past sell in', (done) => {
            var item = new Item("Conjured", 15, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Conjured", 11, 9) ]);
            done();
        });

        it('should not impact Back Stage Pass items quality when sellIn above or equals to 10', (done) => {
            var item = new Item("Back Stage Pass", 15, 10);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Back Stage Pass", 15, 9) ]);
            done();
        });

        it('should increase Back Stage Pass items quality by 2 when sellIn between 10 and 5', (done) => {
            var item = new Item("Back Stage Pass", 9, 9);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Back Stage Pass", 11, 8) ]);
            done();
        });

        it('should increase Back Stage Pass items quality by 3 when sellIn between 5 and 0', (done) => {
            var item = new Item("Back Stage Pass", 15, 3);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Back Stage Pass", 18, 2) ]);
            done();
        });

        it('should decrease Back Stage Pass items quality to 0 past sell in', (done) => {
            var item = new Item("Back Stage Pass", 50, 0);
            var result = GildedRose.updateQuality([ item ]);
            expect(result).to.deep.equal([ new Item("Back Stage Pass", 0, 0) ]);
            done();
        });

    });
});

