for (let i = 1; i <13; i++)
{
    document.getElementById(i.toString()).addEventListener("click", function ()
    {
        console.log(document.getElementById(i.toString()))
        document.getElementById("input-num-".concat('', i.toString())).classList.toggle("display-none");
    })
}
document.getElementById("btnID").addEventListener("click",function(){
  
});


// Step 1: Get user coordinates
function getCoordintes()
{
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos)
    {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        var coordinates = [lat, lng];
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        getCity(coordinates);
        return;

    }

    function error(err)
    {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}



getCoordintes();

//  geeks for geeks over

// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

function initMap()
{
    const mapOptions = {
        zoom: 8,
        center: { lat: lat, lng: lng },
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(lat, lng)
        position: { lat: lat, lng: lng },
        map: map,
    });
    // You can use a LatLng literal in place of a google.maps.LatLng object when
    // creating the Marker object. Once the Marker object is instantiated, its
    // position will be available as a google.maps.LatLng object. In this case,
    // we retrieve the marker's position using the
    // google.maps.LatLng.getPosition() method.
    const infowindow = new google.maps.InfoWindow({
        content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    });

    google.maps.event.addListener(marker, "click", () =>
    {
        infowindow.open(map, marker);
    });
}