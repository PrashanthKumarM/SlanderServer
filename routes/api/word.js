var mongoose = require('mongoose');  
var Word = require('../../models/word');

module.exports.addWord = function(req, res) {
	var word = new Word(req.body.word);
	word.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({word: word});
    });
};

module.exports.getAllWords = function(req, res) {
	Word.find(function(err, words) {
        if (err) {
            res.send(err);
        }
        res.json({words: words});
    });
};

module.exports.updateWord = function(req, res, id) {
	Word.findByIdAndUpdate(id, {$set: req.body.word}, function(err, word) {
        if (err) {
            res.send(err);
        }
        res.json({word: word});
    });
};

module.exports.deleteWord = function(req, res, id) {
	Word.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send(err);
        }
        res.sendStatus(200);
    });
}; 