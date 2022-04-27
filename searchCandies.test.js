const searchCandies = require('./searchCandies')
describe('searchcandies', () => {
    it('searches candies', () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
})