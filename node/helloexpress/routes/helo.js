var express = require('express');
var router = express.Router();
var msglist = [];
var fs = require('fs');


/*get helo page */
router.get('/',function(req, res, next){
    var p1 = req.query.p1;
    var p2 = req.query.p2;
    var msg = p1 ===undefined ? "no query" : p1 +"," + p2;
    res.render('helo',
    {
        title: 'helo page',
        msg  : msg,
        input: '',
        msglist:''
    });
});

router.post('/',function(req,res,next){
    var str = req.body['input1'];
    if(str !== ""){
        msglist.push(str);
    }

    res.render('helo',
        {
            title:'helo page',
            msg: "your typed :" + str,
            input: '',
            msglist: msglist
        }
    )
    fs.appendFile("bbs.txt", str + ",", (err) =>{
        if(err){
            console.log('err')
        }else{
            console.log('succes')
        }
    })   
})

module.exports = router;
