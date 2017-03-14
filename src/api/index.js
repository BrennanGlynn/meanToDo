'use strict';

var express = require('express');

var router = express.Router();

router.get('/todos', function (req, res) {
    res.json({todos:[]});
});

// TODO: Add POST route to create new entries

// TODO: Add POST route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;