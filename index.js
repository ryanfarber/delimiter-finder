// index.js

function DelimiterFinder(delimiterInput) {
	
	this.find = function(string) {
		let arrayOutput = []
		let objOutput = {}
		let regex

		if (Array.isArray(delimiterInput)) {

			delimiterInput.forEach(delimiter => {
				regex = new RegExp("(?<=\\" + delimiter + ")(\\w*)(?=\\" + delimiter + ")", "gi")

				if (string.match(regex)) {
					let matches = string.match(regex)
					arrayOutput.push({delimiter: delimiter, matches: matches})
					objOutput[delimiter] = matches
				} else {
					arrayOutput.push({delimiter: delimiter, matches: undefined})
					objOutput[delimiter] = undefined
				}
			})

			return objOutput
		} 

		else if (typeof delimiterInput == "string" ) {
			let delimiter = delimiterInput
			regex = new RegExp("(?<=\\" + delimiter + ")(\\w*)(?=\\" + delimiter + ")", "gi")

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