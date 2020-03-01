const router = require('express').Router();
// const verify  = require('./verifytoken')

router.get('/p',(req,res) => {
    res.json({
        posts:{
            title:'my',
            description:'dvcsdvdsvdsv'
        }
    });
});

module.exports = router;