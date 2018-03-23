var marker = new google.maps.Marker({
          position: uluru,
          map: map;
})


function initMap() {
        var uluru = {lat: 37.9929969, lng: -99.4204288};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
  });

		 }