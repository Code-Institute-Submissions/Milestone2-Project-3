// Template for maps from Interactive Frontend Development Module 

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: 
                    {lat:52.2350,lng:-0.9337}

                
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                {locId: 'A' ,lat:53.765071,lng:-2.371204, Team: "Accy"},   //Accrington
                {lat:51.405568,lng:-0.282414},   //AFC Wimbledon
                {lat:53.805049,lng:-3.049142},   //Blackpool
                {lat:51.486727,lng:-2.582715},   //Bristol rovers
                {lat:52.821763,lng:-1.627278},   //Burton
                {lat:51.486867,lng:0.035826},    //Charlton
                {lat:53.088085,lng:-2.436214},   //Crewe
                {lat:53.510732,lng:-1.114606},   //Doncaster
                {lat:53.916814,lng:-3.023953},   //Fleetwood
                {lat:51.384399,lng:0.560967},    //Gillingham
                {lat:53.745916,lng:-0.368016},   //Hull
                {lat:52.055102,lng:1.145308},    //Ipswich
                {lat:53.21855,lng:-0.540772},    //Lincoln
                {lat:52.009853,lng:-0.733461},   //MK dons
                {lat:52.235431,lng:-0.934538},   //Northampton
                {lat:51.716099,lng:-1.207979},   //Oxford
                {lat:52.56493,lng:-0.241323},    //Peterborough
                {lat:50.388358,lng:-4.151052},   //Plymouth
                {lat:50.795982,lng:-1.064688},   //Portsmouth
                {lat:53.62068,lng:-2.180778},    //Rochdale
                {lat:52.688589,lng:-2.748459},   //Shrewsbury
                {lat:54.9147,lng:-1.388435},     //Sunderland
                {lat:51.56459,lng:-1.772057},    //Swindon
                {lat:53.547375,lng:-2.655075}    //Wigan


];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
                
                var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            });

            
        }

 // Template for maps from Interactive Frontend Development Module 

function initMap() {
    var options = {
        zoom: 8,
        center:  {lat:52.2350,lng:-0.9337}
    }
    var map = new google.maps.Map(document.getElementById("map"),options);

  /*  var marker = new google.maps.Marker({
        position:  {lat:52.2350,lng:-0.9337},
        map:map,
            });

   var infoWindow = new google.maps.InfoWindow({
        content:'<h1>NTFC</h1>'
    });

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
*/  

// Array for Markers

    var markers =[
        {coords:{ lat:53.7654,lng:-2.37106},
content:'<h6>Accrington Stanley</h6>'},
{coords:{lat:51.4051,lng:-0.281984},
content:'<h6>AFC Wimbledon</h6>'},
{coords:{lat:53.8046,lng:-3.04834},
content:'<h6>Blackpool</h6>'},
{coords:{lat:51.4862,lng:-2.58315},
content:'<h6>Bristol rovers</h6>'},
{coords:{lat:52.8219,lng:-1.62708},
content:'<h6>Burton Albion</h6>'},
{coords:{lat:51.4865,lng:0.036757},
content:'<h6>Charlton Athletic</h6>'},
{coords:{lat:53.0875,lng:-2.43569},
content:'<h6>Crewe Alexandra</h6>'},
{coords:{lat:53.5099,lng:-1.11382},
content:'<h6>Doncaster Rovers</h6>'},
{coords:{lat:53.9165,lng:-3.02484},
content:'<h6>Fleetwood Town</h6>'},
{coords:{lat:51.3844,lng:0.560367},
content:'<h6>Gillingham</h6>'},
{coords:{lat:53.7465,lng:-0.368009},
content:'<h6>Hull City</h6>'},
{coords:{lat:52.0544,lng:1.14554},
content:'<h6>Ipswich Town</h6>'},
{coords:{lat:53.2184,lng:0.5407},
content:'<h6>Lincoln City</h6>'},
{coords:{lat:52.0096,lng:-0.733507},
content:'<h6>mk dons</h6>'},
{coords:{lat:52.2352,lng:-0.933485},
content:'<h6>Northampton Town</h6>'},
{coords:{lat:51.7164,lng:-1.20775},
content:'<h6>Oxford United</h6>'},
{coords:{lat:52.5648,lng:-0.240434},
content:'<h6>Peterborough United</h6>'},
{coords:{lat:50.3882,lng:-4.15076},
content:'<h6>Plymouth Argyle</h6>'},
{coords:{lat:50.7964,lng:-1.06389},
content:'<h6>Portsmouth</h6>'},
{coords:{lat:53.6209,lng:-2.17993},
content:'<h6>Rochdale</h6>'},
{coords:{lat:52.6886,lng:-2.74931},
content:'<h6>Shrewsbury Town</h6>'},
{coords:{lat:54.9146,lng:-1.38837},
content:'<h6>Sunderland</h6>'},
{coords:{lat:51.5645,lng:-1.77107},
content:'<h6>Swindon Town</h6>'},
{coords:{lat:53.5477,lng:-2.65415},
content:'<h6>Wigan Athletic</h6>'}
    ]

 var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    // loop through markers

        for(var i=0; i<markers.length;i++){
           addMarker(markers[i]);
        }
    
        //add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
         label: labels[i % labels.length]
       // icon: props.iconImage
            });
        //  check for custom icon
            if(props.iconImage){
                // Set icon image
                marker.setIcon(props.iconImage)
            }

        // check content    
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                content:props.content
    });

    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    })
            }
    }
}
            