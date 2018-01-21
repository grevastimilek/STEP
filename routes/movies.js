var express = require('express');
var router = express.Router();
var moviesController=require('../Controller/moviesController');
router.get('/all',moviesController.getAllMovies)
      .post('/add',moviesController.addNewMovie);
module.exports=router;
