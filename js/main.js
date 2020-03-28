function initMap() {
  const loc = {
    lat: 40.6602037,
    lng: -73.9689,
  }
  const frame = { zoom: 14, center: loc };
  const map = new google.maps.Map(document.querySelector('.map'), frame);
  const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
})
