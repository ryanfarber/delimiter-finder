// index.js

function DelimiterFinder(delimiterInput) {
	
	this.find = function(string) {
		let output = []
		let regex

		if (Array.isArray(delimiterInput)) {

			delimiterInput.forEach(token => {
				regex = new RegExp("(?<=\\" + token + ")(\\w*)(?=\\" + token + ")", "gi")

				if (string.match(regex)) {
					let matches = string.match(regex)
					output.push({delimiter: token, matches: matches})
				} else {
					output.push({delimiter: token, matches: undefined})
				}
			})
			// console.log(output)
			return output
		} 

		else if (typeof delimiterInput == "string" ) {
			let token = delimiterInput
			regex = new RegExp("(?<=\\" + token + ")(\\w*)(?=\\" + token + ")", "gi")

			if (string.match(regex)) {
				output = string.match(regex)
				// console.log(output)
				return output
			} else {
				return undefined
			}
		}
	}

}

module.exports = DelimiterFinder