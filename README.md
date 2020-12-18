# delimiter-finder
a utility to find words inside delimiters.
---

## usage
create a new object with an array of delimiters.

use `find()` with a string as the input.  it will output an array of matches for each delimiter specified.

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
