// test.js

let DelimiterFinder = require("./index.js")
let delim = new DelimiterFinder(["$", "%"])


let matches = delim.find("hello $world$, how are you %today%")
console.log(matches)

/*

[
  { delimiter: '$', matches: [ 'world' ] },
  { delimiter: '%', matches: [ 'today' ] }
]

*/