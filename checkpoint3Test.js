var home = {}
var checkpoint3Assets = require('../pageAssets/checkpoint3Assets')
const { verify } = require('crypto')

module.exports = {
    beforeEach: browser => {
        home = browser.page.checkpoint3Objects()
        home
        .navigate()
    },
    after: browser => {
        home
        .end()
    },
    'all the tests': browser => {
        home.checkpoint3Tests(checkpoint3Assets)
    }
    
}






