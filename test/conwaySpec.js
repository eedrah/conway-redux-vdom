var expect = require('expect.js')
var conway = require('../conway.js')

describe('overPopulated', function () {
    it ('should return true with cell count >= 3', function () {
        expect(conway.overPopulated(3)).to.be(true) 
    })
    it ('should return false with cell count < 3', function () {
        expect(conway.overPopulated(2)).to.be(false) 
    })
})

describe('underPopulated', function () {
    it ('should return true with cell count < 2', function () {
        expect(conway.underPopulated(1)).to.be(true) 
    })
    it ('should return false with cell count < 3', function () {
        expect(conway.underPopulated(2)).to.be(false) 
    })
})
describe('ressurectable', function () {
    it ('should return true with cell count == 3', function () {
        expect(conway.ressurectable(3)).to.be(true) 
    })
    it ('should return false with cell count != 3', function () {
        expect(conway.ressurectable(2)).to.be(false) 
    })
})
