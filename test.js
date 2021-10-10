// test.js

const DelimiterFinder = require("./index.js")
let delim
let matches

delim = new DelimiterFinder(["$", "%"])
matches = delim.find("hello $world$, how are you %today%")
console.log(matches)

delim = new DelimiterFinder("$")
matches = delim.find("hello $world$, how are you %today%")
console.log(matches)
