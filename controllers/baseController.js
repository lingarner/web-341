const baseController = {}

baseController.buildMe =  function(req, res) {
    res.send('Lindsay Garner')
}

baseController.buildYou =  function(req, res) {
    res.send('Your name here')
}

baseController.buildPeople =  function(req, res) {
    res.send('See some Peoples')
}


baseController.buildHome =  function(req, res) {
    res.send('Home Page')
}


module.exports = baseController;