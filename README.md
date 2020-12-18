# delimiter-finder
a utility to find words inside delimiters.
---

## usage
create a new object with an array of delimiters.

```javascript

const DelimiterFinder = require("delimiter-finder")
const delim = new DelimiterFinder(["$", "%"])

let matches = delim.find("hello $world$, how are you %today%")
console.log(matches)

/*
	[
	  { delimiter: '$', matches: [ 'world' ] },
	  { delimiter: '%', matches: [ 'today' ] }
	]
*/

````
