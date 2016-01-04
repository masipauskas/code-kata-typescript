/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;

import BowlingGame from '../../app/BowlingGame/bowlingScore'

describe('Bowling game: #score', () => {
    var game: BowlingGame = new BowlingGame();

    beforeEach(() => {
        game = new BowlingGame();
    });

    describe("with spare every round to have a score of 150", () => {
        expect(game.score("5/5/5/5/5/5/5/5/5/5/5")).to.equal(150);
    });

    describe("with a heartbreak to have a score of 90", () => {
        expect(game.score("9-9-9-9-9-9-9-9-9-9-")).to.equal(90);
    });

    describe("with a perfect game to have a score of 300", () => {
        expect(game.score("XXXXXXXXXXXX")).to.equal(300);
    });

    describe("with a sample game to have a score of 60", () => {
        expect(game.score("12345123451234512345")).to.equal(60);
    });
});