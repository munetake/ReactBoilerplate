const express = require('express');
const router = express.Router();
const storage = [];
var id = 0;

// if there are data send from the frontend via body, use req.body
// if there are data being send from the frontend via query string like, http://localhost:3000/api/v0/sample/?q=hi
// use req.query -> this would print {q: "hi"}

router.get('/', (req, res) => {
  res.send({
    response: "Hello World"
  });
});

router.post('/', (req, res) => {
  let obj = req.body;
  obj.id = id;
  obj.isDeleted = false;
  id++;
  storage.push(obj);
  console.log(obj);
  res.send({
    response: storage
  });
});

router.put('/', (req, res) => {
  res.send({
    response: "Hello World"
  });
});

router.delete('/', (req, res) => {
  res.send({
    response: "Hello World"
  });
});

module.exports = router;
