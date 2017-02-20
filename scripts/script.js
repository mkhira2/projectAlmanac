console.log('do we hve jquery?')
console.log($)

var getCountryData = function(countryObj) {
	var countryStr = ''
	countryStr += '<div class="country">' + '<h1 class="countryName">' + countryObj.name + '</h1>'
	countryStr += '<h2 class="capital">' + countryObj.capital + '</h2>' + '</div>'
	return countryStr
}

var handleResponse = function(apiResponse) {
	var stringHTML = ''
	var containerNode = document.querySelector('.container')
	console.log('now we got the data, right?')
	for (var i = 0; i < apiResponse.length; i++) {
		stringHTML += getCountryData(apiResponse[i])
	}
	containerNode.innerHTML = stringHTML
}

var promise = $.getJSON('https://restcountries.eu/rest/v1/region/oceania')

promise.then(handleResponse)