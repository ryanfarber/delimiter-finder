// index.js

function DelimiterFinder(delimiterInput) {
	this.findSingleMatch = function(delimiter, string){
		const regex = new RegExp("(?<=\\" + delimiter + ")(\\w*)(?=\\" + delimiter + ")", "gi")
		const matches = string.match(regex)
		if (matches) {
			return matches
		} else {
			return undefined
		}
	}
	
	this.find = function(string) {
		if (Array.isArray(delimiterInput)) {
			const objOutput = {}
			delimiterInput.forEach(delimiter => {
				const matches = this.findSingleMatch(delimiter, string)
				objOutput[delimiter] = matches
			})
			return objOutput
		} 
		else if (typeof delimiterInput === "string" ) {
			return this.findSingleMatch(delimiterInput, string)
		}
	}

}

module.exports = DelimiterFinder