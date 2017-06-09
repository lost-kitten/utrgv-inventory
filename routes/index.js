'use strict';

const Edinburg = require('../models/edinburg');
const Brownsville = require('../models/brownsville');
const Mcallen = require('../models/mcallen');
// const Harlingen = require('../models/harlingen.js');

exports.displayHomePage = (req, res) => {
  res.render('index');
}
