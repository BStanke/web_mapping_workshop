///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'bstanke.l8mm4ip6'; //<- this references the ugly green map that I made (now mine)
var token = 'pk.eyJ1IjoiYnN0YW5rZSIsImEiOiJMZXFweUdRIn0.fQNY4-tsvGPi6trhZJD4fg'; //<- this is my token, use yours (done).

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

