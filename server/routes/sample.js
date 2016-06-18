const express = require('express');
const router = express.Router();
const contactSchema = require('../database/mongo');
const storage = [];
var id = 0;

// if there are data send from the frontend via body, use req.body
// if there are data being send from the frontend via query string like, http://localhost:3000/api/v0/sample/?q=hi
// use req.query -> this would print {q: "hi"}

router.get('/', (req, res) => {
  contactSchema.find((err, lists) => {
    if(err) throw err;
    res.send({
      response: lists
    });
  });
});

router.post('/', (req, res) => {
  let newContact = new contactSchema();
  newContact.id = id;
  newContact.name = req.body.name;
  newContact.quote = req.body.quote;
  newContact.address = req.body.address;
  newContact.isDeleted = false;
  id++;
  newContact.save((err) => {
    if(err) throw err;
    contactSchema.find((err, lists) => {
      if(err) throw err;
      res.send({
        response: lists
      });
    });
  });
});

router.put('/:id', (req, res) => {
  contactSchema.findOne({id: req.params.id}, (err, item) => {
    if(err) throw err;
    item.name = req.body.name;
    item.address = req.body.address;
    item.quote = req.body.quote;
    item.save((err) => {
      if(err) throw err;
      contactSchema.find((err, lists) => {
        if(err) throw err;
        res.send({
          response: lists
        });
      });
    });
  });
});

router.delete('/:id', (req, res) => {
  contactSchema.findOne({id: req.params.id}, (err, item) => {
    if(err) throw err;
    item.isDeleted = true;
    item.save((err) => {
      if(err) throw err;
      contactSchema.find((err, lists) => {
        if(err) throw err;
        res.send({
          response: lists
        });
      });
    });
  });
});

module.exports = router;