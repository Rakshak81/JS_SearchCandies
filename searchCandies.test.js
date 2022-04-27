const searchCandies = require('./searchCandies')
describe('searchcandies', () => {
    it('searches candies', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    })
    it('searches candies', () => {
        expect(searchCandies('ma', 2)).toEqual([ 'Mars'])
    })

    it('searches candies', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst'])
    })

})