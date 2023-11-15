function initMap() {
  const paradise = {lat: 18.3802694, lng: 94.3340317};

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: paradise
  });

  var marker = new google.maps.Marker({
    position: paradise,
    map: map,
    title: 'My Favorite Vacation Place'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const ngapali = document.querySelector('.ngapali-visuals');
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  let currentIndex = 0;

  function pictureSlider(index) {
      if (index < 0) {
          currentIndex = ngapali.children.length - 1;
      } 
      else if (index < ngapali.children.length) {
          currentIndex = index;
      } 
      else {
          currentIndex = 0;
      }

      for (let i = 0; i < ngapali.children.length; i++) {
          ngapali.children[i].style.visibility = 'hidden';
      }

      ngapali.children[currentIndex].style.visibility = 'visible';

  }

  previous.addEventListener('click', function () {
      pictureSlider(currentIndex - 1);
  });

  next.addEventListener('click', function () {
      pictureSlider(currentIndex + 1);
  });

  pictureSlider(currentIndex)
})