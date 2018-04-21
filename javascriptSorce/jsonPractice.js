var _ = require('./underscore/underscore');

var testArray =
    [
        { pending: '01' },
        { pending: '02' },
        { pending: '03' }
    ];

if (testArray !== null) {
    console.log('array.length is ' + testArray.length);
    for (var key in testArray) {
        if (testArray[key].pending === '02') {
            console.log('testArray has \'02\'');
        } else {
            console.log('testArray was checked');
        }
    }
} else {
    console.log('array is null')
}

if (testArray !== null) {
    console.log('array.length is ' + testArray.length);
    _.each(testArray, (code) => {
        if (code.pending == '02') {
            console.log('found');
        } else {
            console.log('not found');
        }
    })
}

console.log('array has 02 ? > ' +
    (
        _.find(testArray, (object) => {
            return object.pending === '02'
        }) !== null
    )
);

