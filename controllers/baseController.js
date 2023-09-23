const utils = require('../utilities')
const baseController = {}


baseController.showAllPeople =  async function(req, res) {
     let peopleListed = await utils.getAllPeople();
     console.log(peopleListed)
     res.send(peopleListed)
}

baseController.buildHome =  function(req, res) {
    res.send('Home Page')
}


module.exports = baseController;