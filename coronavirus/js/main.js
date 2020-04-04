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
		



	$.ajax({			
    headers : { "Set-Cookie", "HttpOnly;Secure;SameSite=Strict" },
    type: 'POST',			
	url: 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/',
    crossDomain: true,
    contentType: "application/json",
    dataType: 'jsonp',
	    success: function(data){

		// var year = 'AZE', countriesAndTerritories;
		// data.records.some(function(el) {
		//    if (el.geoId == "AF") countriesAndTerritories = el.countriesAndTerritories;
		//    return countriesAndTerritories;
		// })
		// console.log(countriesAndTerritories);

	 var year = 'AZE', countriesAndTerritories;
	 data.records.some(function(el) {
	    if (el.geoId == "AZ") {
	    	countriesAndTerritories = el.countriesAndTerritories;
	    	dateRep = el.dateRep;
	    }
	    return countriesAndTerritories;
	 });
	 console.log(countriesAndTerritories + dateRep);

		}

	});




});
