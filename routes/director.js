const express = require('express');
const router = express.Router();

// Models
const Director = require('../models/Director');

router.post('/', (req, res, next) => {
  const director = new Director(req.body);
  const promise = director.save();

  promise.then((data) => {
  	res.json(data);
	}).catch((err) => {
  	res.json(data);
	})
});

module.exports = router;
