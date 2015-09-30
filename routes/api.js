var express = require('express');  
var router = express.Router();

var words = require('./api/word');

/* Words routes */
router.route('/words/')  
    .post(function(req,res) { words.addWord(req,res) })
    .get(function(req,res) { words.getAllWords(req,res) });

/* Single Word routes */
router.route('/word/:word_id')  
    .put(function(req, res) { words.updateWord(req, res, req.params.word_id) })
    .delete(function(req, res) { words.deleteWord(req, res, req.params.word_id) });

module.exports = router;  