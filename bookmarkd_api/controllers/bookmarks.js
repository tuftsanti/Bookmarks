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

router.get('/', (req, res)=>{
    res.send('index')
})

module.exports = router;
