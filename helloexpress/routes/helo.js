var express = require('express');
var router = express.Router();

/*get helo page */
router.get('/',function(req, res, next){
    res.render('helo',{
        title: 'helo',
        data: {
            'taro':'taro@yamada',
            'hanako':'hanako@flower',
            'tuyano':'syoda@tuyano.com'
        }
    });
});

module.exports = router;
