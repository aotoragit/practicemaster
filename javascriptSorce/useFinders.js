const finders = require('./jsonPractice');

testArray = [
    null, //null
    [
        { pending: "02" } //1 and hit
    ],
    [
        { pending: "01" } // 1 and no hit
    ],
    [
        { pending: "01" }, // 2 and hit
        { pending: "02" }
    ],
    [
        { pending: "01" }, // 2 and no hit
        { pending: "03" }
    ],
    [
        {}                 //0 and no hit
    ]
];

for (var array in testArray) {
    console.log(testArray[array]);
    console.log('   forloop:' + finders.forloop(testArray[array]));
    // console.log(' underEach:' + finders.underEach(testArray[array]));
    finders.underEach(testArray[array]);
    console.log(' underFind:' + finders.forloop(testArray[array]));
}

