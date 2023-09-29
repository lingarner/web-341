const utils = require('../model/contacts')
const baseController = {}


baseController.showAllPeople =  async function(req, res) {
     let peopleListed = await utils.getAllPeople();
     console.log(peopleListed)
     res.send(peopleListed)
}

baseController.findOne =  async function(req, res) {
    let personId = req.params._id;
    let foundPerson = await utils.getOnePerson(personId);
    res.send(foundPerson || null)
}

baseController.insertNew = async function(req, res){
    let newContact = await utils.insertOne();
    console.log(newContact)
    if (newContact) {
        res.status(201).send(newContact.insertedId);
      } else {
        res.status(500).json(res.error || 'Some error occurred while creating the contact.');
      }

}

baseController.updateContact = async function(req, res){
    let personId = req.params._id;
    let updatedContact = await utils.updateOne(personId)
    if (updatedContact > 0) {
        res.status(204).json(res.message || "Contact successfully updated");
      } else {
        res.status(500).json(res.error || 'Some error occurred while updating the contact.');
      }
}
  
baseController.deleteContact = async function(req, res){
    let personId = req.params._id;
    let deletedContact = await utils.deleteOne(personId);
    if (deletedContact > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(res.error || 'Some error occurred while deleting the contact.');
      }
}
module.exports = baseController;