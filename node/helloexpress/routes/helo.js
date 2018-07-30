const express = require('express');
const router = express.Router();
const msglist = [];
const fs = require('fs');
const firstList;

fs.readFile('bbs.txt','utf-8',(err,data) => {
    if(err){
        throw err;
    }
    firstList = data.toString().split(',');
    console.log(firstList)
    for(var i in firstList){
        msglist.unshift(i);
    }
});

/*get helo page */
router.get('/',function(req, res, next){
    var msg = "BBS FORMAT"
    res.render('helo',
    {
        title: 'helo page',
        msg  : msg,
        input: '',
        msglist:msglist.length === 0 ? firstList : msglist
    })
    
});

router.post('/',function(req,res,next){
    var str = req.body['input1'];
    if (str !== "") {
        if (msglist.length < 9) {
            msglist.unshift(str);
        } else {
            msglist.pop()
            msglist.unshift(str);
        }
    }

    fs.writeFile("bbs.txt", msglist, (err) => {
        if(err){
            console.log('write err')
        }else{
            console.log('succes')
        }
    })
    res.redirect('helo')
})

module.exports = router;
