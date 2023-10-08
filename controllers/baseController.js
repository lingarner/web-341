const utils = require('../model/contacts')
const baseController = {}


baseController.showAllPeople =  async function(req, res) {
    /*    
    #swagger.description = 'Retrives all contacts from the database' 
    */
     let peopleListed = await utils.getAllPeople();
     console.log(peopleListed)
     res.send(peopleListed)
}

baseController.findOne =  async function(req, res) {
    /*    
    #swagger.description = 'Retrives the 'id' specified by user from the database' 
    */
    let personId = req.params._id;
    let foundPerson = await utils.getOnePerson(personId);
    res.send(foundPerson || null)
}

baseController.insertNew = async function(req, res){
      /*    
        #swagger.parameters['contact'] = {
        in: 'body',
        description: 'Insert a new Contact',
        required: true,
        type: 'string',
        format: 'json',
        schema: {
            $firstName: 'NewFirstName',
            $lastName: 'NewLastName',
            $email: 'new@email.com',
            $birthday: 'January 1, 2000',
            $favoriteColor: 'NewColor'
          }
        }
      } */
    let newContact = await utils.insertOne(req);
    console.log(newContact)
    if (newContact) {
        res.status(201).send(newContact.insertedId);
      } else {
        res.status(500).json(res.error || 'Some error occurred while creating the contact.');
      }

}

baseController.updateContact = async function(req, res){
  /* 
  #swagger.parameters['_id'] = {
    in: 'path',
    description: 'Select and update a specific contact',
    required: true,
    type: 'string',
    format: 'hex'
  }
  #swagger.parameters['contact'] = {
    in: 'body',
    description: 'Updated contact data',
    required: true,
    type: 'json',
    schema: {
      $firstName: 'NewFirstName',
      $lastName: 'NewLastName',
      $email: 'new@email.com',
      $birthday: 'January 1, 2000',
      $favoriteColor: 'NewColor'
    }
  }
*/

    let personId = req.params._id;
    let updatedContact = await utils.updateOne(personId, req)
    if (updatedContact > 0) {
        res.status(204).json(res.message || "Contact successfully updated");
      } else {
        res.status(500).json(res.error || 'Some error occurred while updating the contact.');
      }
}
  
baseController.deleteContact = async function(req, res){
    /*    
    #swagger.description = 'Deletes the 'id' specified by user from the database' 
    */
    let personId = req.params._id;
    let deletedContact = await utils.deleteOne(personId);
    if (deletedContact > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(res.error || 'Some error occurred while deleting the contact.');
      }
}
module.exports = baseController;