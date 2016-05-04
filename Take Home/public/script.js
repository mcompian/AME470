/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var subtleGrayscale;
var blueWater;
var midnightCommander;
var unsaturatedBrowns;
var normal;
var address = document.getElementById('input').value;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
        , center: {
            lat: -34.397
            , lng: 150.644
        }
    });
    var geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('input').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function changeTheme(theme) {
    var address = document.getElementById('input').value;
    normal = [{
        "featureType": "landscape.man_made"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#f7f1df"
        }]
    }, {
        "featureType": "landscape.natural"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#d0e3b4"
        }]
    }, {
        "featureType": "landscape.natural.terrain"
        , "elementType": "geometry"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi"
        , "elementType": "labels"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.business"
        , "elementType": "all"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.medical"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#fbd3da"
        }]
    }, {
        "featureType": "poi.park"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#bde6ab"
        }]
    }, {
        "featureType": "road"
        , "elementType": "geometry.stroke"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road"
        , "elementType": "labels"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#ffe15f"
        }]
    }, {
        "featureType": "road.highway"
        , "elementType": "geometry.stroke"
        , "stylers": [{
            "color": "#efd151"
        }]
    }, {
        "featureType": "road.arterial"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.local"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "black"
        }]
    }, {
        "featureType": "transit.station.airport"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#cfb2db"
        }]
    }, {
        "featureType": "water"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#a2daf2"
        }]
    }]
    subtleGrayscale = [{
        "featureType": "landscape"
        , "stylers": [{
            "saturation": -100
        }, {
            "lightness": 65
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "poi"
        , "stylers": [{
            "saturation": -100
        }, {
            "lightness": 51
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.highway"
        , "stylers": [{
            "saturation": -100
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial"
        , "stylers": [{
            "saturation": -100
        }, {
            "lightness": 30
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "road.local"
        , "stylers": [{
            "saturation": -100
        }, {
            "lightness": 40
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "transit"
        , "stylers": [{
            "saturation": -100
        }, {
            "visibility": "simplified"
        }]
    }, {
        "featureType": "administrative.province"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water"
        , "elementType": "labels"
        , "stylers": [{
            "visibility": "on"
        }, {
            "lightness": -25
        }, {
            "saturation": -100
        }]
    }, {
        "featureType": "water"
        , "elementType": "geometry"
        , "stylers": [{
            "hue": "#ffff00"
        }, {
            "lightness": -25
        }, {
            "saturation": -97
        }]
    }]

    blueWater = [{
        "featureType": "administrative"
        , "elementType": "labels.text.fill"
        , "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "landscape"
        , "elementType": "all"
        , "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi"
        , "elementType": "all"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road"
        , "elementType": "all"
        , "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway"
        , "elementType": "all"
        , "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial"
        , "elementType": "labels.icon"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit"
        , "elementType": "all"
        , "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water"
        , "elementType": "all"
        , "stylers": [{
            "color": "#46bcec"
        }, {
            "visibility": "on"
        }]
    }]

    midnightCommander = [{
        "featureType": "all"
        , "elementType": "labels.text.fill"
        , "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "all"
        , "elementType": "labels.text.stroke"
        , "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 13
        }]
    }, {
        "featureType": "administrative"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "administrative"
        , "elementType": "geometry.stroke"
        , "stylers": [{
            "color": "#144b53"
        }, {
            "lightness": 14
        }, {
            "weight": 1.4
        }]
    }, {
        "featureType": "landscape"
        , "elementType": "all"
        , "stylers": [{
            "color": "#08304b"
        }]
    }, {
        "featureType": "poi"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#0c4152"
        }, {
            "lightness": 5
        }]
    }, {
        "featureType": "road.highway"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "road.highway"
        , "elementType": "geometry.stroke"
        , "stylers": [{
            "color": "#0b434f"
        }, {
            "lightness": 25
        }]
    }, {
        "featureType": "road.arterial"
        , "elementType": "geometry.fill"
        , "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "road.arterial"
        , "elementType": "geometry.stroke"
        , "stylers": [{
            "color": "#0b3d51"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "road.local"
        , "elementType": "geometry"
        , "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "transit"
        , "elementType": "all"
        , "stylers": [{
            "color": "#146474"
        }]
    }, {
        "featureType": "water"
        , "elementType": "all"
        , "stylers": [{
            "color": "#021019"
        }]
    }]

    unsaturatedBrowns = [{
        "elementType": "geometry"
        , "stylers": [{
            "hue": "#ff4400"
        }, {
            "saturation": -68
        }, {
            "lightness": -4
        }, {
            "gamma": 0.72
        }]
    }, {
        "featureType": "road"
        , "elementType": "labels.icon"
    }, {
        "featureType": "landscape.man_made"
        , "elementType": "geometry"
        , "stylers": [{
            "hue": "#0077ff"
        }, {
            "gamma": 3.1
        }]
    }, {
        "featureType": "water"
        , "stylers": [{
            "hue": "#00ccff"
        }, {
            "gamma": 0.44
        }, {
            "saturation": -33
        }]
    }, {
        "featureType": "poi.park"
        , "stylers": [{
            "hue": "#44ff00"
        }, {
            "saturation": -23
        }]
    }, {
        "featureType": "water"
        , "elementType": "labels.text.fill"
        , "stylers": [{
            "hue": "#007fff"
        }, {
            "gamma": 0.77
        }, {
            "saturation": 65
        }, {
            "lightness": 99
        }]
    }, {
        "featureType": "water"
        , "elementType": "labels.text.stroke"
        , "stylers": [{
            "gamma": 0.11
        }, {
            "weight": 5.6
        }, {
            "saturation": 99
        }, {
            "hue": "#0091ff"
        }, {
            "lightness": -86
        }]
    }, {
        "featureType": "transit.line"
        , "elementType": "geometry"
        , "stylers": [{
            "lightness": -48
        }, {
            "hue": "#ff5e00"
        }, {
            "gamma": 1.2
        }, {
            "saturation": -23
        }]
    }, {
        "featureType": "transit"
        , "elementType": "labels.text.stroke"
        , "stylers": [{
            "saturation": -64
        }, {
            "hue": "#ff9100"
        }, {
            "lightness": 16
        }, {
            "gamma": 0.47
        }, {
            "weight": 2.7
        }]
    }]

    var mapOptions = {
        zoom: 15
        , center: marker.position
        , styles: theme
    };
    console.log(theme);
    map.setOptions(mapOptions);
}

initMap();