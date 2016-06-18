var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost:27017/testContacts'); //default port for mongodb
var contactSchema = new Mongoose.Schema({ //mongo creates unique identifer
  name: String,
  address: String,
  isDeleted: Boolean,
  quote: String,
  id: Number
});

module.exports = Mongoose.model('Contacts', contactSchema); 
