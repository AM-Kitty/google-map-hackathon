
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.714452, lng: -79.388191 },
        zoom: 11,
    });

    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
        { lat: 43.750405, lng: -79.638991 },
        { lat: 43.854970, lng: -79.170699 },
        { lat: 43.813860, lng: -79.152160 },
        { lat: 43.792055, lng: -79.118514 },
        { lat: 43.759332, lng: -79.151473 },
        { lat: 43.739988, lng: -79.197478 },
        { lat: 43.582520, lng: -79.543548 },
        { lat: 43.750405, lng: -79.638991 }
    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.15,
    });

    bermudaTriangle.setMap(map);
}

window.initMap = initMap;