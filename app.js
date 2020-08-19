const validator = require('validator');

const testURL = validator.isURL('https://davincasely.com');

console.log(testURL);
