$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#selLng').val(),
            lat: $('#selLat').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#clouds').html(result['data'][0]['clouds']);
                $('#temperature').html(result['data'][0]['temperature']);
                $('#humidity').html(result['data'][0]['humidity']);
                $('#stationName').html(result['data'][0]['stationName']);
                //$('#txtArea').html(result['data'][0]['areaInSqKm']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});