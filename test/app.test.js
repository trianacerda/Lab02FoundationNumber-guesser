// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('if user guessed too high', (expect) => {
    const expected = 1;
    const actual = compareNumbers (2, 3);
    expect.equal(actual, expected);

});

test('if user guessed too low', (expect) => {
    const expected = -1;
    const actual = compareNumbers (5, 4);
    expect.equal(actual, expected);

});

test('if user guessed correct', (expect) => {
    const expected = 0;
    const actual = compareNumbers (4, 4);
    expect.equal(actual, expected);

});