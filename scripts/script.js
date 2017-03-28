// function takes country object as input and returns string containing country names and capitals
var getCountryData = function(countryObj) {
	var countryStr = '' // set emptry string
	countryStr += '<div class="country">' + '<h1 class="countryName">' + countryObj.name + '</h1>' // add country name to empty string in h1 tag
	countryStr += '<h2 class="capital">' + countryObj.capital + '</h2>' + '</div>' // add country capital to empty string in h2 tag
	return countryStr // make string available for out-of-function use
}

// function takes the api response as input and ouputs a string (built by data from the fulfilled promise) to our container div
var handleResponse = function(apiResponse) {
	var stringHTML = '' // set empty string
	var containerNode = document.querySelector('.container') // access container div from DOM
	for (var i = 0; i < apiResponse.length; i++) { // while iterating through the api response given to us by the promise....
		stringHTML += getCountryData(apiResponse[i]) // ...build our string using the above function
	}
	containerNode.innerHTML = stringHTML // add string to our container div
}

var promise = $.getJSON('https://restcountries.eu/rest/v1/region/oceania') // allows us access to the rest countries api in json format

promise.then(handleResponse) // returns promise