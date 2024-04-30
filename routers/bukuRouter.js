const express = require('express');
const router = express.Router();
const bukuRouterService = require('../service/bukuRouterService');

router.get('/api/user', async function(req, res, next){
    try {
        res.json(await bukuRouterService.getMultiple(req.query.page));
    } catch (err) {
        console.error('error mengambil data user', err.message);
        next(err);
    }
});

module.exports = router;
