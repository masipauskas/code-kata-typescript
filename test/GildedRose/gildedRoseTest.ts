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

    });
});

