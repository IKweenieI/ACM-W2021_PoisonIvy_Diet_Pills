for (let i = 1; i < 27; i++)
{
    try
    {
        document.getElementById(i.toString()).addEventListener("click", function ()
        {
            console.log(document.getElementById(i.toString()));
            document.getElementById("input-num-".concat('', i.toString())).classList.toggle("display-none");
        });
    }
    catch (err) { }
}
document.getElementById("btnID").addEventListener("click", function ()
{
    let willBeToggled = document.querySelectorAll(".toggle-on-submit")
    
    for (let i = 0; i < willBeToggled.length; i++)
    {
      willBeToggled[i].classList.toggle("display-none")
    }


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
        return;

    }

    function error(err)
    {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}



getCoordintes();

let map;

function initMap()
{
    const mapOptions = {
        zoom: 8,
        center: { lat: lat, lng: lng },
    };

    map = new google.maps.Map(document.getElementById("the-map"), mapOptions);

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

