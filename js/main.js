
// Initializing Google Map
function initMap() {
  const loc = {
    lat: 40.6602037,
    lng: -73.9689,
  }
  const frame = { zoom: 14, center: loc };
  const map = new google.maps.Map(document.querySelector('.map'), frame);
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// changing navbar opacity based on scroll y-axis position
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9
  }
})

// Implementing smooth scrolling when navigating from navbar or button
$('#navbar a, btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
})
