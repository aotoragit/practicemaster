const express = require('express');
const router = express.Router();
const msglist = [];
const fs = require('fs');

/*get helo page */
router.get('/', (req, res, next) => {
    const p1 = req.query.p1;
    const p2 = req.query.p2;
    const msg = p1 === undefined ? "no query" : p1 +"," + p2;
    res.render('helo', {
        title: 'helo page',
        msg  : msg,
        input: '',
        msglist: ''
    });
});

router.post('/', (req, res, next) => {
    let str = req.body['input1'];
    if (str !== "") {
        msglist.push(str);
    } else {
        str = "no type";
    }
    res.render('helo', {
            title:'helo page',
            msg: "your typed :" + str,
            input: '',
            msglist: msglist
        }
    )
    fs.appendFile("bbs.txt", str + ",", (err) =>{
        if(err){
            console.log('err')
            fs.close()
        }else{
            console.log('succes')
        }
    })   
})

module.exports = router;
