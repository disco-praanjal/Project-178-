let latitude = 28.704016209126635, longitude = 77.10246449720974;

mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center: [longitude,latitude],
    zoom: 10
})

map.addControl( 
    new MapboxGeocoder({ 
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    }), 
);

var img1 = document.querrySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querrySelector("#lotus")
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([75.85133, 26.98547])
.addTo(map);
