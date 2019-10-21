var express = require('express');
var router = express.Router();
var db = require('../db');

const { MovieRecord } = require('../models/movieRecord');
const bcrypt = require('bcryptjs');

//add movie record
router.post('/addMovieRecord', async (req, res) => {
  movie = new MovieRecord(req.body);
  await movie.save();
  return res.send({
      message: 'You added successfully'
  });
})

  // get the whole record
  router.get('/getAllMovies', async(req,res,next) => {
      let array = [];
      array = (await MovieRecord.find());
        return res.json(array);
    })
module.exports = router;