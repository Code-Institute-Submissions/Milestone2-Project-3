//map options

function initMap() {
	let options = {
			zoom: 6,
			center: {
				lat: 52.2350,lng: -0.9337
			}
		};
// new map

	let map = new google.maps.Map(document.getElementById("map"), options);

 // add marker
 
	let markers = [{
		coords: {
			lat: 53.7654,lng: -2.37106
		},
       	content: "<img src ='assets/images/grounds/whamStadium.jpg' alt='whamStaduim'><h6>Accrington Stanley</h6><a href ='https://www.accringtonstanley.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/b8UtxScD4LbvDUr8A' target='_blank'>  Directions to Wham Stadium</a>"
    },
     {
		coords: {
			lat: 51.4051,lng: -0.281984
		},
		content: "<img src ='assets/images/grounds/kingsmeadow.jpg' alt ='kingsmeadow'><h6>AFC Wimbledon</h6><a href ='https://www.afcwimbledon.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/TgrW59Zq8czC7hp37' target='_blank'>  Directions to Kingsmeadow</a>"
    },
     {
		coords: {
			lat: 53.8046,lng: -3.04834
		},
		content: "<img src ='assets/images/grounds/bloomfieldRoad.jpg' alt ='Bloomfield'><h6>Blackpool</h6><a href ='https://www.blackpoolfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/A7EvfhrLSv4ETcMV7' target='_blank'>  Directions to Bloomfield Road</a>"
    },
     {
		coords: {
			lat: 51.4862,lng: -2.58315
		},
		content: "<img src ='assets/images/grounds/memorialstadium.jpg' alt ='Memorial'><h6>Bristol Rovers</h6><a href ='https://www.bristolrovers.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/KogCPZAXsH79gFbDA' target='_blank'>  Directions to Memorial Ground</a>"
    },
     {
		coords: {
			lat: 52.8219,lng: -1.62708
		},
		content: "<img src ='assets/images/grounds/pirelli.jpg' alt ='Pirelli'><h6>Burton Albion</h6><a href ='https://www.burtonalbionfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/X44cvrns7yCYvAMi9' target='_blank'>  Directions to Pirelli Stadium</a>"
    },
     {
		coords: {
			lat: 51.4865,lng: 0.036757
		},
		content: "<img src ='assets/images/grounds/valley.jpg' alt ='Valley'><h6>Charlton Athletic</h6><a href ='https://www.cafc.co.uk/home' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/tCwueUZhCRQns5eT6' target='_blank'>  Directions to The Valley</a>"
    },
     {
		coords: {
			lat: 53.0875,lng: -2.43569
		},
		content: "<img src ='assets/images/grounds/grestyRoad.jpg' alt ='Gresty Road'><h6>Crewe Alexandra</h6><a href ='https://www.crewealex.net/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/ikphzcbcYEG7vDAd7' target='_blank'>  Directions to Gresty Road</a>"
    },
     {
		coords: {
			lat: 53.5099,lng: -1.11382
		},
		content: "<img src ='assets/images/grounds/keepmoat.jpg' alt ='Keepmoat'><h6>Doncaster Rovers</h6><a href ='https://www.doncasterroversfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/VqCwK5XW4FYukYoX7' target='_blank'>  Directions to Keepmoat Stadium</a>"
    },
     {
		coords: {
			lat: 53.9165,lng: -3.02484
		},
		content: "<img src ='assets/images/grounds/highbury.jpg' alt ='Highbury'><h6>Fleetwood Town</h6><a href ='https://www.fleetwoodtownfc.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/eUTjHDQV2fLjkKtu7' target='_blank'>  Directions to Highbury Stadium</a>"
    },
     {
		coords: {
			lat: 51.3844,lng: 0.560367
		},
		content: "<img src ='assets/images/grounds/priestfield.jpg' alt ='Priestfield'><h6>Gillingham</h6><a href ='https://www.gillinghamfootballclub.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/zR8sZLqwT2fCTp6Q8' target='_blank'>  Directions to Priestfield Stadium</a>"
    },
     {
		coords: {
			lat: 53.7465,lng: -0.368009
		},
		content: "<img src ='assets/images/grounds/kcom.jpg' alt ='Kcom'><h6>Hull City</h6><a href ='https://www.hullcitytigers.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/iy1p13pWSyLNxhUg7' target='_blank'>  Directions to KCOM Stadium</a>"
    },
     {
		coords: {
			lat: 52.0544,lng: 1.14554
		},
		content: "<img src ='assets/images/grounds/portmanRoad.jpg' alt ='Portman Road'><h6>Ipswich Town</h6><a href ='https://www.itfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/u4EhA1tkemSb5hcg9' target='_blank'>  Directions to Portman Road</a>"
    },
     {
		coords: {
			lat: 53.2185,lng: -0.5407
		},
		content: "<img src ='assets/images/grounds/sincilBank.jpg' alt ='Sincil Bank'><h6>Lincoln City</h6><a href ='https://www.weareimps.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/t7pxiuaxrRfVfR6u5' target='_blank'>  Directions to LNER Stadium</a>"
    },
     {
		coords: {
			lat: 52.0096,lng: -0.733507
		},
		content: "<img src ='assets/images/grounds/stadiumMk.jpg' alt ='Stadium Mk'><h6>MK Dons</h6><a href ='https://www.mkdons.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/5EnCXir9o1KtsM1Z6' target='_blank'>  Directions to Stadium MK</a>"
    },
     {
		coords: {
			lat: 52.2352,lng: -0.933485
		},
		content: "<img src ='assets/images/grounds/sixfields.jpg' alt ='Sixfields'><h6>Northampton Town</h6><a href ='https://www.ntfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/HRdo2zHbzPQmneWaA' target='_blank'>  Directions to Sixfields Stadium</a>"
    },
     {
		coords: {
			lat: 51.7164,lng: -1.20775
		},
		content: "<img src ='assets/images/grounds/kassam.jpg' alt ='Kassam'><h6>Oxford United</h6><a href ='https://www.oufc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/By8W4Adgd288MfqPA' target='_blank'>  Directions to Kassam Stadium</a>"
    }, 
    {
		coords: {
			lat: 52.5648,lng: -0.240434
		},
		content: "<img src ='assets/images/grounds/westonhomes.jpg' alt ='Weston Homes'><h6>Peterborough United</h6><a href ='https://www.theposh.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/nPmwrjbEmo474ByD7' target='_blank'>  Directions to Weston Homes Stadium</a>"
    },
     {
		coords: {
			lat: 50.3882,lng: -4.15076
		},
		content: "<img src ='assets/images/grounds/homepark.png' alt ='Home Park'><h6>Plymouth Argyle</h6><a href ='https://www.pafc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/F26NVvToFTxuPM3n8' target='_blank'>  Directions to Home Park</a>"
    }, 
    {
		coords: {
			lat: 50.7964,lng: -1.06389
		},
		content: "<img src ='assets/images/grounds/frattonPark.jpg' alt ='Fratton Park'><h6>Portsmouth</h6><a href ='https://www.portsmouthfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/WuqBnp3WuZ9HmdLz9' target='_blank'>  Directions to Fratton Park</a>"
    }, 
    {
		coords: {
			lat: 53.6209,lng: -2.17993
		},
		content: "<img src ='assets/images/grounds/spotland.png' alt ='Spotland'><h6>Rochdale</h6><a href ='https://www.rochdaleafc.co.uk' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/JT1ujuck1WgP6mQ57' target='_blank'>  Directions to Crown Oils Arena</a>"
    },
     {
		coords: {
			lat: 52.6886,lng: -2.74931
		},
		content: "<img src ='assets/images/grounds/newMeadow.jpg' alt ='New Meadow'><h6>Shrewsbury Town</h6><a href ='https://www.shrewsburytown.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/1A8TM77jz82ApDd67' target='_blank'>  Directions to Montgomery Waters Meadow</a>"
    }, 
    {
		coords: {
			lat: 54.9146,lng: -1.38837
		},
		content: "<img src ='assets/images/grounds/stadiumOfLight.jpg' alt ='Stadium of Light'><h6>Sunderland</h6><a href ='https://www.safc.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/Wj2PPZ2pw2kvWePd6' target='_blank'>  Directions to Stadium Of Light</a>"
    },
    {
		coords: {
			lat: 51.5645,lng: -1.77107
		},
		content: "<img src ='assets/images/grounds/countyground.jpg' alt ='County Ground'><h6>Swindon Town</h6><a href ='https://www.swindontownfc.co.uk/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/waxbvbZbmz47dgHR7' target='_blank'>  Directions to County Ground</a>"
    },
     {
		coords: {
			lat: 53.5477,lng: -2.65415
		},
		content: "<img src ='assets/images/grounds/dwStadium.jpg' alt ='DW Stadium'><h6>Wigan Athletic</h6><a href ='https://wiganathletic.com/' target='_blank'>Go To Club Site</a><br><a href='https://goo.gl/maps/rGjVAYuyK8W1kvbG7' target='_blank'>  Directions to DW Stadium</a>"
    }];
    
	for(let i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

//  add marker function

	function addMarker(props) {
		let marker = new google.maps.Marker({
			position: props.coords,
            map: map
		});
		if(props.content) {
			let InfoWindow = new google.maps.InfoWindow({
				content: props.content
			});
			marker.addListener('click', function() {
				InfoWindow.open(map, marker);
			});
		}
	}
}