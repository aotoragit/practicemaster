var _ = require('./underscore/underscore');

function forloop(testArray) {
    if (testArray !== null) {
        // console.log('array.length is ' + testArray.length);
        for (let key in testArray) {
            if (testArray[key].pending === '02') {
                return true;
            } 
        };
        return false;
    };
    // console.log('array is null');
    return false;
};


function underEach(testArray) {
    if (testArray !== null) {
        // console.log('array.length is ' + testArray.length);
        let flg = 0;
        _.each(testArray, (code) => {
            if(code.pending === '02'){
                console.log (' underEach:true');
                flg = 1;
            }
        })
        if(flg === 0){console.log(' underEach:false')};
        return 
    }
    console.log(' underEach:false')
}

function underFind(testArray) {
    return (
        _.find(testArray, (object) => {
            return object.pending === '02'
        }) !== null
    )
}

exports.forloop = forloop;
exports.underEach = underEach;
exports.underFind = underFind;
