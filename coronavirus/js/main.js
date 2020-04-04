$(document).ready(function(){
		// $.ajax({
		//     headers : { 'Access-Control-Allow-Origin' : '*' },
		//     type: 'POST',			
		// 	url: 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/',
		//     crossDomain: true,
		//     contentType: "application/json",
		//     dataType: 'jsonp',
		//      success: function(json){
		//          console.log(json);
		//      }
		// });



// $.ajax({
//   url: "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/",
//   beforeSend: function( xhr ) {
//     xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
//   }
// })
//   .done(function( data ) {
//     if ( console && console.log ) {
//       console.log( "Sample of data:", data.slice( 0, 100 ) );
//     }
//   });
		



// 	$.ajax({		
// 	method: 'GET',
// 	headers: { 'Access-Control-Allow-Origin' : '*'  },		
// 	url: 'https://cors-anywhere.herokuapp.com/https://opendata.ecdc.europa.eu/covid19/casedistribution/json/',
//     crossDomain: true,
//     contentType: "application/json",
//     dataType: 'jsonp',
// 	    success: function(data){
// data.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
// 		// var year = 'AZE', countriesAndTerritories;
// 		// data.records.some(function(el) {
// 		//    if (el.geoId == "AF") countriesAndTerritories = el.countriesAndTerritories;
// 		//    return countriesAndTerritories;
// 		// })
// 		// console.log(countriesAndTerritories);

// 	 var year = 'AZE', countriesAndTerritories;
// 	 data.records.some(function(el) {
// 	    if (el.geoId == "AZ") {
// 	    	countriesAndTerritories = el.countriesAndTerritories;
// 	    	dateRep = el.dateRep;
// 	    }
// 	    return countriesAndTerritories;
// 	 });
// 	 console.log(countriesAndTerritories + dateRep);

// 		}

// 	});
var host = process.env.HOST || 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});



});
