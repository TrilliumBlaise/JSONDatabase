const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidHJpbGxpdW1ibGFpc2UiLCJhIjoiY2wxeHBhZDFhMDR6YzNrcG1vNmhwcGxicCJ9._9iecx7UpUGmgUTVe5RV0g';

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directioncontrols = new MapboxDirections({ accessToken: MAPBOX_ACCESS_TOKEN });
  map.addControl(directioncontrols, 'top-left');
}
