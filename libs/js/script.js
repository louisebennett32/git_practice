$('#btnRunNearbyWeather').click(function() {

    $.ajax({
        url: "libs/php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#selLng').val(),
            lat: $('#selLat').val()
        },
        success: function(result) {

            if (result.status.name == "ok") {
                
                $('#clouds').html(result['data']['clouds']);
                $('#dateTime').html(result['data']['datetime']);
                $('#countryCode').html(result['data']['countryCode']);
                $('#temperature').html(result['data']['temperature']);
                $('#humidity').html(result['data']['humidity']);
                $('#stationName').html(result['data']['stationName']);
                $('#windDirection').html(result['data']['windDirection']);
                $('#windSpeed').html(result['data']['windSpeed']);


            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    }); 

});





$('#btnRunNearbyPOI').click(function() {

    $.ajax({
        url: "libs/php/getPointsOfInterest.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#selLngPOI').val(),
            lat: $('#selLatPOI').val()
        },
        success: function(result) {

            if (result.status.name == "ok") {
                
                $('#poiName1').html(result['data'][0]['name']);
                $('#poiType1').html(result['data'][0]['typeClass']);
                $('#poiName2').html(result['data'][1]['name']);
                $('#poiType2').html(result['data'][1]['typeClass']);
                $('#poiName3').html(result['data'][2]['name']);
                $('#poiType3').html(result['data'][2]['typeClass']);
                $('#poiName4').html(result['data'][3]['name']);
                $('#poiType4').html(result['data'][3]['typeClass']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    }); 

});





$('#btnWiki').click(function() {

    $.ajax({
        url: "libs/php/getWikipedia.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalcode: $('#selPostcode').val(),
            country: $('#selCountry').val(),
            radius: $('#selRadius').val()

        },
        success: function(result) {

            if (result.status.name == "ok") {
                
                $('#summary1').html(result['data'][0]['summary']);
                $('#title1').html(result['data'][0]['title']);
                $('#wikipediaUrl1').html(result['data'][0]['wikipediaUrl']);
                $('#distance1').html(result['data'][0]['distance']);
                $('#summary2').html(result['data'][1]['summary']);
                $('#title2').html(result['data'][1]['title']);
                $('#wikipediaUrl2').html(result['data'][1]['wikipediaUrl']);
                $('#distance2').html(result['data'][1]['distance']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    }); 

});