// Template for maps from Interactive Frontend Development Module 

function initMap() {
	var options = {
		zoom: 14,
		center: {
			lat: 52.2350,
			lng: -0.9337
		}
	};
	var map = new google.maps.Map(document.getElementById("map"), options);
	// Array for Markers



	var markers = [{
		coords: {
			lat: 53.7654,
			lng: -2.37106
		},
		content: '<h6>Accrington Stanley</h6>'
	}, {
		coords: {
			lat: 51.4051,
			lng: -0.281984
		},
		content: '<h6>AFC Wimbledon</h6>'
	}, {
		coords: {
			lat: 53.8046,
			lng: -3.04834
		},
		content: '<h6>Blackpool</h6>'
	}, {
		coords: {
			lat: 51.4862,
			lng: -2.58315
		},
		content: '<h6>Bristol rovers</h6>'
	}, {
		coords: {
			lat: 52.8219,
			lng: -1.62708
		},
		content: '<h6>Burton Albion</h6>'
	}, {
		coords: {
			lat: 51.4865,
			lng: 0.036757
		},
		content: '<h6>Charlton Athletic</h6>'
	}, {
		coords: {
			lat: 53.0875,
			lng: -2.43569
		},
		content: '<h6>Crewe Alexandra</h6>'
	}, {
		coords: {
			lat: 53.5099,
			lng: -1.11382
		},
		content: '<h6>Doncaster Rovers</h6>'
	}, {
		coords: {
			lat: 53.9165,
			lng: -3.02484
		},
		content: '<h6>Fleetwood Town</h6>'
	}, {
		coords: {
			lat: 51.3844,
			lng: 0.560367
		},
		content: '<h6>Gillingham</h6>'
	}, {
		coords: {
			lat: 53.7465,
			lng: -0.368009
		},
		content: '<h6>Hull City</h6>'
	}, {
		coords: {
			lat: 52.0544,
			lng: 1.14554
		},
		content: '<h6>Ipswich Town</h6>'
	}, {
		coords: {
			lat: 53.2184,
			lng: 0.5407
		},
		content: '<h6>Lincoln City</h6>'
	}, {
		coords: {
			lat: 52.0096,
			lng: -0.733507
		},
		content: '<h6>mk dons</h6>'
	}, {
		coords: {
			lat: 52.2352,
			lng: -0.933485
		},
		content: '<h6>Northampton Town</h6>'
	}, {
		coords: {
			lat: 51.7164,
			lng: -1.20775
		},
		content: '<h6>Oxford United</h6>'
	}, {
		coords: {
			lat: 52.5648,
			lng: -0.240434
		},
		content: '<h6>Peterborough United</h6>'
	}, {
		coords: {
			lat: 50.3882,
			lng: -4.15076
		},
		content: '<h6>Plymouth Argyle</h6>'
	}, {
		coords: {
			lat: 50.7964,
			lng: -1.06389
		},
		content: '<h6>Portsmouth</h6>'
	}, {
		coords: {
			lat: 53.6209,
			lng: -2.17993
		},
		content: '<h6>Rochdale</h6>'
	}, {
		coords: {
			lat: 52.6886,
			lng: -2.74931
		},
		content: '<h6>Shrewsbury Town</h6>'
	}, {
		coords: {
			lat: 54.9146,
			lng: -1.38837
		},
		content: '<h6>Sunderland</h6>'
	}, {
		coords: {
			lat: 51.5645,
			lng: -1.77107
		},
		content: '<h6>Swindon Town</h6>'
	}, {
		coords: {
			lat: 53.5477,
			lng: -2.65415
		},
		content: '<h6>Wigan Athletic</h6>'
	}];

	var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

	// loop through markers

	for (var i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

	//add marker function
	function addMarker(props) {
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			label: labels[i % labels.length]
				
        });
        
        
		//  check for custom icon
		if (props.iconImage) {
			// Set icon image
			marker.setIcon(props.iconImage);
		}

		// check content    
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content
			});

			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			});
		}
    }
}