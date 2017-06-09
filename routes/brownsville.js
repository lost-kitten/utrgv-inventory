'use strict';

const  Brownsville= require('../models/brownsville.js');

exports.displayBrownsvillePage = (req, res) => {
  res.render('brownsville');
}
