const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmarks.js');

router.post('/', async (req, res) => {
    try {
        const createdBookmark = await Bookmark.create(req.body);
        res.status(200).json(createdBookmark);
    } catch(error) {
        res.status(400).json(error)
    }
});

router.get('/', async (req, res)=>{
    try {
        const bookmarks = await Bookmark.find({});
        res.status(200).json(bookmarks)
    } catch(error) {
        res.status(400).json(error)
    }
});

module.exports = router;
