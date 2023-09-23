const utils = require('../utilities')
const baseController = {}


baseController.showAllPeople =  async function(req, res) {
     let peopleListed = await utils.getAllPeople();
     console.log(peopleListed)
     res.send(peopleListed)
}

baseController.findOne =  async function(req, res) {
    let personId = req.params._id;
    let foundPerson = await utils.getOnePerson(personId);
    console.log(foundPerson)
    res.send(foundPerson || null)
}


module.exports = baseController;