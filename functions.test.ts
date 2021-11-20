const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray should return an array', () => expect(Array.isArray(shuffleArray([]))).toBe(true));

    test('shuffleArray should return same length array as one inputted', () => expect([].length).toBe(shuffleArray([]).length));
})