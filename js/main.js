function initMap() {
  const loc = {
    lat: 40.6602037,
    lng: -73.9689,
  }
  // const frame = { zoom: 14, center: loc }
  const map = new google.maps.Map(document.querySelector('.map'), { center: loc, zoom: 14 })
  const marker = new google.maps.Marker({ position: loc, map: map })
}
