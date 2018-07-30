const fs = require('fs');
const readline = require('readline');

const stream = fs.createReadStream('./log.txt', 'utf-8');
const reader = readline.createInterface({input: stream});

const getIdlist = [];

reader.on('line', (data) => {
  let jsondata = data ==="" ? "" : JSON.parse(data);
  if (jsondata.msgbody == 'startlog') {
      getIdlist.push(jsondata.logid)
      console.log(jsondata.logid)
  }
  if (jsondata.msgbody == 'endlog' ) {
    // console.log('found endlog' + jsondata.logid)
    console.log(jsondata.logid +":"+jsondata.responsetime)
  } 
})