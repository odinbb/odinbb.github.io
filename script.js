mapboxgl.accessToken =
  "pk.eyJ1Ijoib2RpbmJiIiwiYSI6ImNrdWdhcGxjazIyZnMyd3FsaHlxaWE1MW8ifQ.H2eWeR0WVrXxTzhws4iUtw"
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([126.73730023829938, 37.51540091001187]) 
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}